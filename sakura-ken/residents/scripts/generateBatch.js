/**
 * バッチ処理による住民データ生成
 * メモリ効率を考慮した分割生成
 */

const fs = require('fs');
const path = require('path');
const ResidentDataGenerator = require('./dataGenerator');

class BatchDataGenerator {
  constructor() {
    this.generator = new ResidentDataGenerator();
    this.batchSize = 10000; // 1ファイルあたりの住民数
    this.outputDir = path.join(__dirname, '../data/districts');
  }

  // 全地区の定義
  getDistrictDefinitions() {
    return [
      // 桜花市（892,456人）- 12地区
      { cityName: '桜花市', cityCode: 'SKK', code: 'central', name: '中央地区', type: 'central', population: 120000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'higashi', name: '東地区', type: 'residential', population: 85000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'nishi', name: '西地区', type: 'residential', population: 78000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'minami', name: '南地区', type: 'mixed', population: 92000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'kita', name: '北地区', type: 'residential', population: 76000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'shinmachi', name: '新町地区', type: 'central', population: 88000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'honmachi', name: '本町地区', type: 'central', population: 95000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'midori', name: '緑地区', type: 'residential', population: 65000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'asahi', name: '旭地区', type: 'mixed', population: 72000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'wakaba', name: '若葉地区', type: 'residential', population: 58000 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'sakura', name: '桜地区', type: 'mixed', population: 71456 },
      { cityName: '桜花市', cityCode: 'SKK', code: 'hanazono', name: '花園地区', type: 'residential', population: 62000 },

      // 桜川市（524,189人）- 4地区
      { cityName: '桜川市', cityCode: 'SKG', code: 'kogyo', name: '工業地区', type: 'industrial', population: 185000 },
      { cityName: '桜川市', cityCode: 'SKG', code: 'chuo', name: '中央地区', type: 'mixed', population: 142000 },
      { cityName: '桜川市', cityCode: 'SKG', code: 'minato', name: '港地区', type: 'industrial', population: 115000 },
      { cityName: '桜川市', cityCode: 'SKG', code: 'kaigan', name: '海岸地区', type: 'industrial', population: 82189 },

      // 東桜市（412,567人）- 4地区
      { cityName: '東桜市', cityCode: 'HSK', code: 'jutaku', name: '住宅地区', type: 'residential', population: 125000 },
      { cityName: '東桜市', cityCode: 'HSK', code: 'chuo', name: '中央地区', type: 'mixed', population: 108000 },
      { cityName: '東桜市', cityCode: 'HSK', code: 'koen', name: '公園地区', type: 'residential', population: 95000 },
      { cityName: '東桜市', cityCode: 'HSK', code: 'bunka', name: '文化地区', type: 'residential', population: 84567 },

      // 西桜市（198,347人）- 4地区
      { cityName: '西桜市', cityCode: 'NSK', code: 'noen', name: '農園地区', type: 'rural', population: 65000 },
      { cityName: '西桜市', cityCode: 'NSK', code: 'sanson', name: '山村地区', type: 'rural', population: 42000 },
      { cityName: '西桜市', cityCode: 'NSK', code: 'chuo', name: '中央地区', type: 'mixed', population: 58000 },
      { cityName: '西桜市', cityCode: 'NSK', code: 'shinko', name: '新興地区', type: 'mixed', population: 33347 },

      // 南桜市（285,632人）- 4地区
      { cityName: '南桜市', cityCode: 'MSK', code: 'onsen', name: '温泉地区', type: 'tourism', population: 78000 },
      { cityName: '南桜市', cityCode: 'MSK', code: 'kanko', name: '観光地区', type: 'tourism', population: 92000 },
      { cityName: '南桜市', cityCode: 'MSK', code: 'chuo', name: '中央地区', type: 'mixed', population: 75000 },
      { cityName: '南桜市', cityCode: 'MSK', code: 'kaigan', name: '海岸地区', type: 'tourism', population: 40632 },

      // 北桜市（541,136人）- 4地区
      { cityName: '北桜市', cityCode: 'KSK', code: 'chuo', name: '中央地区', type: 'mixed', population: 165000 },
      { cityName: '北桜市', cityCode: 'KSK', code: 'gakuen', name: '学園地区', type: 'residential', population: 145000 },
      { cityName: '北桜市', cityCode: 'KSK', code: 'kogyo', name: '工業地区', type: 'industrial', population: 128000 },
      { cityName: '北桜市', cityCode: 'KSK', code: 'shinko', name: '新興地区', type: 'mixed', population: 103136 }
    ];
  }

  // ディレクトリ作成
  ensureDirectoryExists() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  // 単一地区のデータ生成
  async generateDistrictData(district) {
    console.log(`開始: ${district.cityName} ${district.name} (人口: ${district.population.toLocaleString()}人)`);
    
    const fileCount = Math.ceil(district.population / this.batchSize);
    let totalGenerated = 0;
    let residentIndex = 1;

    for (let fileIndex = 0; fileIndex < fileCount; fileIndex++) {
      const remainingPopulation = district.population - totalGenerated;
      const currentBatchSize = Math.min(this.batchSize, remainingPopulation);
      
      // ファイル名生成
      const fileName = `${district.cityCode.toLowerCase()}-${district.code}-${String(fileIndex + 1).padStart(3, '0')}.json`;
      const filePath = path.join(this.outputDir, fileName);

      // データ生成
      const data = {
        metadata: {
          version: '1.0',
          generatedAt: new Date().toISOString(),
          district: {
            city: district.cityName,
            name: district.name,
            code: district.code,
            type: district.type
          },
          statistics: {
            totalResidents: currentBatchSize,
            households: 0,
            averageAge: 0,
            employmentRate: 0
          }
        },
        households: []
      };

      // 世帯生成
      let householdIndex = 1;
      let currentPopulation = 0;
      let totalAge = 0;
      let employedCount = 0;

      while (currentPopulation < currentBatchSize) {
        const remainingInBatch = currentBatchSize - currentPopulation;
        const household = this.generator.generateHousehold(district, householdIndex, residentIndex);
        
        // 世帯人数が残り人数を超える場合は調整
        if (household.members.length > remainingInBatch) {
          household.members = household.members.slice(0, remainingInBatch);
        }

        data.households.push(household);
        
        // 統計情報更新
        household.members.forEach(member => {
          totalAge += member.age;
          if (member.occupation !== '無職' && member.occupation !== '学生' && member.age >= 18 && member.age < 65) {
            employedCount++;
          }
        });

        currentPopulation += household.members.length;
        residentIndex += household.members.length;
        householdIndex++;
      }

      // 統計情報計算
      data.metadata.statistics.households = data.households.length;
      data.metadata.statistics.averageAge = Math.round(totalAge / currentPopulation);
      const workingAgePopulation = data.households.reduce((sum, h) => 
        sum + h.members.filter(m => m.age >= 18 && m.age < 65).length, 0
      );
      data.metadata.statistics.employmentRate = workingAgePopulation > 0 ? 
        Math.round((employedCount / workingAgePopulation) * 100) / 100 : 0;

      // ファイル書き込み
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      totalGenerated += currentPopulation;
      
      console.log(`  - ${fileName}: ${currentPopulation.toLocaleString()}人 (${totalGenerated.toLocaleString()}/${district.population.toLocaleString()})`);
    }

    console.log(`完了: ${district.cityName} ${district.name}\n`);
  }

  // 全地区生成
  async generateAllDistricts() {
    console.log('桜県全住民データ生成開始');
    console.log('総人口: 2,854,327人\n');
    
    this.ensureDirectoryExists();
    const districts = this.getDistrictDefinitions();
    
    const startTime = Date.now();
    
    for (const district of districts) {
      await this.generateDistrictData(district);
      
      // メモリ解放のための小休止
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const endTime = Date.now();
    const elapsedTime = Math.round((endTime - startTime) / 1000);
    
    console.log('全データ生成完了！');
    console.log(`処理時間: ${Math.floor(elapsedTime / 60)}分${elapsedTime % 60}秒`);
    console.log(`生成ファイル数: 約${Math.ceil(2854327 / this.batchSize)}ファイル`);
  }

  // 特定の市のみ生成
  async generateCity(cityCode) {
    const districts = this.getDistrictDefinitions().filter(d => d.cityCode === cityCode);
    
    if (districts.length === 0) {
      console.error(`市コード ${cityCode} が見つかりません`);
      return;
    }
    
    this.ensureDirectoryExists();
    
    for (const district of districts) {
      await this.generateDistrictData(district);
    }
  }
}

// 実行
if (require.main === module) {
  const generator = new BatchDataGenerator();
  
  const args = process.argv.slice(2);
  if (args.length > 0 && args[0] === '--city') {
    // 特定の市のみ生成
    generator.generateCity(args[1]);
  } else {
    // 全地区生成
    generator.generateAllDistricts().catch(console.error);
  }
}

module.exports = BatchDataGenerator;