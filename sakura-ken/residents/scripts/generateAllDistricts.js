#!/usr/bin/env node

/**
 * 全地区データ一括生成スクリプト
 * 桜県の全286ファイル（約285万人）を生成
 */

const BatchDataGenerator = require('./generateBatch');

async function main() {
  console.log('========================================');
  console.log('   桜県全住民データ生成システム');
  console.log('========================================');
  console.log('');
  console.log('このスクリプトは桜県の全住民データを生成します。');
  console.log('');
  console.log('生成概要:');
  console.log('- 総人口: 2,854,327人');
  console.log('- 市数: 6市');
  console.log('- 地区数: 32地区');
  console.log('- 生成ファイル数: 約286ファイル');
  console.log('- 推定処理時間: 5-10分');
  console.log('- 推定ディスク使用量: 2-3GB');
  console.log('');
  console.log('========================================');
  console.log('');

  const generator = new BatchDataGenerator();
  
  try {
    await generator.generateAllDistricts();
    console.log('\n✅ 全データ生成が正常に完了しました！');
  } catch (error) {
    console.error('\n❌ エラーが発生しました:', error);
    process.exit(1);
  }
}

// メイン処理実行
main();