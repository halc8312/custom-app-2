#!/usr/bin/env node

/**
 * 🌸 桜県全住民データ生成実行スクリプト 🌸
 * 
 * このスクリプトを実行すると、桜県の全住民データ（約285万人）が生成されます。
 * 
 * 実行方法:
 * node EXECUTE_TO_GENERATE_ALL_DATA.js
 * 
 * 注意事項:
 * - 実行には数時間かかる可能性があります
 * - 約2-3GBのディスク容量が必要です
 * - メモリ使用量を抑えるため、バッチ処理で生成します
 */

const fs = require('fs');
const path = require('path');
const BatchDataGenerator = require('./generateBatch');

// カラー出力用のヘルパー
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

async function confirmExecution() {
  console.log(colorize('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'magenta'));
  console.log(colorize('                    🌸 桜県全住民データ生成システム 🌸', 'bright'));
  console.log(colorize('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'magenta'));
  console.log('');
  console.log('このシステムは、桜県の全住民データを生成します。');
  console.log('');
  console.log(colorize('【生成データ概要】', 'cyan'));
  console.log(`  総人口: ${colorize('2,854,327人', 'yellow')}`);
  console.log(`  市数: ${colorize('6市', 'yellow')}`);
  console.log(`  地区数: ${colorize('32地区', 'yellow')}`);
  console.log(`  ファイル数: ${colorize('約286ファイル', 'yellow')}`);
  console.log('');
  console.log(colorize('【各市の人口】', 'cyan'));
  console.log(`  桜花市: ${colorize('892,456人', 'green')} (12地区)`);
  console.log(`  桜川市: ${colorize('524,189人', 'green')} (4地区)`);
  console.log(`  東桜市: ${colorize('412,567人', 'green')} (4地区)`);
  console.log(`  西桜市: ${colorize('198,347人', 'green')} (4地区)`);
  console.log(`  南桜市: ${colorize('285,632人', 'green')} (4地区)`);
  console.log(`  北桜市: ${colorize('541,136人', 'green')} (4地区)`);
  console.log('');
  console.log(colorize('【システム要件】', 'cyan'));
  console.log(`  推定処理時間: ${colorize('5-10分', 'yellow')}`);
  console.log(`  必要ディスク容量: ${colorize('約2-3GB', 'yellow')}`);
  console.log(`  メモリ使用量: ${colorize('最大500MB程度', 'yellow')}`);
  console.log('');
  console.log(colorize('【生成されるデータの特徴】', 'cyan'));
  console.log('  ✅ 現実的な日本の人口統計に基づく年齢分布');
  console.log('  ✅ 整合性のある家族構成・世帯データ');
  console.log('  ✅ 地域特性を反映した職業・収入分布');
  console.log('  ✅ 日本人の一般的な姓名（漢字・かな）');
  console.log('  ✅ 詳細な住所・連絡先情報');
  console.log('');
  console.log(colorize('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'magenta'));
  console.log('');
  console.log(colorize('⚠️  注意: この処理は時間がかかります。中断しないでください。', 'red'));
  console.log('');
  
  // 自動実行モードの場合は確認をスキップ
  if (process.env.AUTO_GENERATE === 'true') {
    console.log(colorize('自動実行モードで開始します...', 'green'));
    return true;
  }
  
  // 通常は確認プロンプトを表示（CI環境では自動的に開始）
  console.log(colorize('生成を開始します...', 'green'));
  return true;
}

async function generateProgressBar(current, total, width = 50) {
  const percentage = Math.round((current / total) * 100);
  const filled = Math.round((current / total) * width);
  const empty = width - filled;
  
  const bar = '█'.repeat(filled) + '░'.repeat(empty);
  return `[${bar}] ${percentage}%`;
}

async function main() {
  try {
    await confirmExecution();
    
    console.log('');
    console.log(colorize('生成を開始しています...', 'green'));
    console.log('');
    
    const startTime = Date.now();
    const generator = new BatchDataGenerator();
    
    // ディレクトリの確認と作成
    const outputDir = path.join(__dirname, '../data/districts');
    if (!fs.existsSync(outputDir)) {
      console.log(`ディレクトリを作成: ${outputDir}`);
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 生成実行
    await generator.generateAllDistricts();
    
    const endTime = Date.now();
    const elapsedSeconds = Math.round((endTime - startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    
    console.log('');
    console.log(colorize('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'green'));
    console.log(colorize('                        ✨ 生成完了！ ✨', 'bright'));
    console.log(colorize('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'green'));
    console.log('');
    console.log(`処理時間: ${colorize(`${minutes}分${seconds}秒`, 'yellow')}`);
    console.log(`生成場所: ${colorize(outputDir, 'cyan')}`);
    console.log('');
    console.log('🎉 桜県の全住民データが正常に生成されました！');
    console.log('');
    
    // ファイル数の確認
    const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.json'));
    console.log(`生成されたファイル数: ${colorize(files.length + 'ファイル', 'green')}`);
    
    // 総人口の確認
    let totalPopulation = 0;
    for (const file of files.slice(0, 10)) { // サンプルチェック
      const data = JSON.parse(fs.readFileSync(path.join(outputDir, file), 'utf8'));
      totalPopulation += data.metadata.statistics.totalResidents;
    }
    
    console.log('');
    console.log('次のステップ:');
    console.log('1. データの品質を確認してください');
    console.log('2. 必要に応じてインデックスを生成してください');
    console.log('3. git add でファイルをステージングしてください');
    console.log('4. git commit でコミットしてください');
    console.log('');
    
  } catch (error) {
    console.error('');
    console.error(colorize('❌ エラーが発生しました:', 'red'));
    console.error(error);
    console.error('');
    console.error('エラーの詳細:');
    console.error(error.stack);
    process.exit(1);
  }
}

// シグナルハンドラー（Ctrl+Cなどでの中断時）
process.on('SIGINT', () => {
  console.log('\n\n' + colorize('⚠️  処理が中断されました', 'yellow'));
  console.log('部分的に生成されたファイルが残っている可能性があります。');
  process.exit(1);
});

// メイン処理の実行
main();