/**
 * 桜県住民データ生成システム
 * 現実的な日本の人口統計に基づいた詳細な住民データを生成
 */

class ResidentDataGenerator {
  constructor() {
    // 日本人の一般的な姓（上位200姓）
    this.lastNames = [
      '佐藤', '鈴木', '高橋', '田中', '渡辺', '伊藤', '山本', '中村', '小林', '加藤',
      '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '林', '斎藤', '清水',
      '山崎', '池田', '阿部', '森', '橋本', '山下', '石川', '中島', '前田', '小川',
      '岡田', '長谷川', '村上', '近藤', '坂本', '遠藤', '青木', '藤田', '西村', '福田',
      '太田', '三浦', '藤原', '岡本', '松田', '中川', '中野', '原田', '小野', '竹内',
      '金子', '和田', '中山', '石田', '上田', '森田', '原', '柴田', '酒井', '工藤',
      '横山', '宮崎', '宮本', '内田', '高木', '安藤', '島田', '谷口', '大野', '高田',
      '丸山', '河野', '今井', '藤井', '小島', '斉藤', '坂口', '大塚', '平野', '渡部',
      '杉山', '菊地', '板垣', '松尾', '久保', '佐野', '大西', '杉本', '石井', '新井',
      '浜田', '桜井', '中田', '安田', '川口', '岩田', '中沢', '北村', '辻', '関',
      '福島', '西田', '菊池', '服部', '鈴村', '川上', '大橋', '後藤', '関口', '増田',
      '石原', '町田', '野口', '松岡', '古川', '土屋', '星野', '大久保', '黒田', '尾崎',
      '早川', '浅野', '吉川', '望月', '川村', '沢田', '菅原', '本田', '秋山', '永井',
      '田村', '萩原', '横田', '小山', '上野', '南', '平田', '大谷', '今村', '堀',
      '片山', '川崎', '久保田', '野村', '谷', '熊谷', '内藤', '松井', '岩崎', '奥村',
      '野田', '白石', '栗原', '荒木', '川田', '大石', '神田', '千葉', '西山', '戸田',
      '飯田', '水野', '小松', '高野', '吉村', '広瀬', '石橋', '須藤', '高山', '武田',
      '岡崎', '馬場', '三宅', '森本', '矢野', '根本', '平井', '黒木', '堀田', '成田',
      '小池', '古賀', '畠山', '内山', '篠原', '宮田', '川本', '吉本', '飯塚', '足立',
      '田口', '上原', '富田', '西川', '金井', '大竹', '岩本', '松村', '長田', '平山'
    ];

    // 男性の名前
    this.maleFirstNames = [
      '太郎', '翔太', '健太', '大輝', '悠斗', '陽太', '翔', '蓮', '大翔', '悠真',
      '健', '隆', '誠', '剛', '修', '豊', '浩', '博', '明', '清',
      '和也', '拓也', '達也', '雄太', '康平', '翔平', '涼平', '大地', '海斗', '陸斗',
      '直樹', '大樹', '和樹', '智也', '雅也', '竜也', '俊介', '亮介', '康介', '祐介',
      '一郎', '二郎', '三郎', '信夫', '義雄', '正雄', '武', '勇', '守', '実',
      '裕太', '雄大', '康太', '将太', '優太', '颯太', '陽', '翼', '駿', '樹',
      '哲也', '智之', '博之', '正之', '敏之', '幸之', '光', '亮', '晃', '昇'
    ];

    // 女性の名前
    this.femaleFirstNames = [
      '花子', '美咲', '愛', '舞', '優花', '美優', '陽菜', '結衣', '葵', 'さくら',
      '恵子', '洋子', '京子', '和子', '幸子', '昭子', '典子', '敏子', '淑子', '文子',
      '美香', '里香', '由香', '麻衣', '真衣', '亜美', '直美', '菜々美', '愛美', '友美',
      '千尋', '千夏', '千春', '美穂', '真穂', '瑞穂', '菜穂', '優', '舞子', '真子',
      '裕子', '智子', '良子', '恵', '愛子', '順子', '久美子', '由美子', '真由美', '由紀',
      '綾', '彩', '楓', '遥', '杏', '茜', '蘭', '凛', '桃', '梓',
      '美紀', '亜紀', '由紀子', '紀子', '理恵', '恵理', '絵里', '香織', '沙織', '詩織'
    ];

    // 地区ごとの特性定義
    this.districtCharacteristics = {
      'sakura-ka-city': {
        name: '桜花市',
        type: 'central',
        avgIncome: 580,
        employmentRate: 0.72,
        seniorRate: 0.23,
        childRate: 0.14
      },
      'sakuragawa-city': {
        name: '桜川市',
        type: 'industrial',
        avgIncome: 520,
        employmentRate: 0.74,
        seniorRate: 0.22,
        childRate: 0.15
      },
      'higashi-sakura-city': {
        name: '東桜市',
        type: 'residential',
        avgIncome: 480,
        employmentRate: 0.68,
        seniorRate: 0.28,
        childRate: 0.12
      },
      'nishi-sakura-city': {
        name: '西桜市',
        type: 'rural',
        avgIncome: 380,
        employmentRate: 0.62,
        seniorRate: 0.35,
        childRate: 0.10
      },
      'minami-sakura-city': {
        name: '南桜市',
        type: 'tourism',
        avgIncome: 450,
        employmentRate: 0.70,
        seniorRate: 0.25,
        childRate: 0.13
      },
      'kita-sakura-city': {
        name: '北桜市',
        type: 'mixed',
        avgIncome: 500,
        employmentRate: 0.71,
        seniorRate: 0.24,
        childRate: 0.14
      }
    };

    // 職業カテゴリと詳細
    this.occupations = {
      agriculture: ['農家', '酪農家', '園芸農家', '林業従事者', '漁業従事者'],
      manufacturing: ['工場作業員', '技術者', '品質管理', '生産管理', '機械オペレーター'],
      retail: ['店員', '店長', 'レジ係', '販売員', '商品管理'],
      services: ['美容師', '理容師', '調理師', 'ウェイター', 'ホテルスタッフ'],
      office: ['事務員', '経理', '総務', '営業', '企画'],
      professional: ['医師', '看護師', '教師', '弁護士', '会計士'],
      technical: ['エンジニア', 'プログラマー', 'デザイナー', '建築士', '電気工事士'],
      public: ['公務員', '警察官', '消防士', '自衛官', '郵便局員'],
      transportation: ['運転手', '鉄道員', 'パイロット', '船員', '配送員'],
      other: ['自営業', 'フリーランス', '芸術家', '作家', 'スポーツ選手']
    };

    // 企業リスト（地域の主要企業）
    this.companies = {
      large: [
        '桜電機株式会社', '東桜重工業', '桜川製鋼', '桜県銀行', '桜交通株式会社',
        '桜建設株式会社', '桜商事株式会社', '桜食品工業', 'サクラ情報システム', '桜医療センター'
      ],
      medium: [
        '桜印刷株式会社', '東桜物流', '桜精密工業', '桜不動産', 'サクラホテルグループ',
        '桜スーパーマーケット', '桜自動車販売', '桜繊維工業', '桜化学工業', '桜観光開発'
      ],
      small: [
        '桜ベーカリー', '田中商店', '山田工務店', '佐藤電気', '鈴木農園',
        '高橋クリーニング', '渡辺整備工場', '伊藤薬局', '中村書店', '小林理髪店'
      ]
    };

    // 教育機関
    this.schools = {
      elementary: ['第一小学校', '第二小学校', '中央小学校', '東小学校', '西小学校'],
      junior: ['第一中学校', '第二中学校', '中央中学校', '東中学校', '西中学校'],
      high: ['桜県立高等学校', '東桜高等学校', '桜商業高等学校', '桜工業高等学校', '桜国際高等学校'],
      university: ['桜大学', '東桜大学', '桜県立医科大学', '桜工科大学', '桜女子大学']
    };
  }

  // 年齢分布の生成（日本の実際の人口ピラミッドに基づく）
  generateAge() {
    const rand = Math.random();
    if (rand < 0.12) return Math.floor(Math.random() * 18); // 0-17歳: 12%
    if (rand < 0.25) return Math.floor(Math.random() * 12) + 18; // 18-29歳: 13%
    if (rand < 0.40) return Math.floor(Math.random() * 10) + 30; // 30-39歳: 15%
    if (rand < 0.58) return Math.floor(Math.random() * 10) + 40; // 40-49歳: 18%
    if (rand < 0.74) return Math.floor(Math.random() * 10) + 50; // 50-59歳: 16%
    if (rand < 0.88) return Math.floor(Math.random() * 10) + 60; // 60-69歳: 14%
    if (rand < 0.96) return Math.floor(Math.random() * 10) + 70; // 70-79歳: 8%
    return Math.floor(Math.random() * 20) + 80; // 80歳以上: 4%
  }

  // 住民ID生成
  generateResidentId(cityCode, districtCode, index) {
    const year = new Date().getFullYear();
    return `${cityCode}-${districtCode}-${year}-${String(index).padStart(6, '0')}`;
  }

  // 電話番号生成
  generatePhoneNumber() {
    const areaCode = '0547'; // 桜県の市外局番
    const exchange = Math.floor(Math.random() * 900) + 100;
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `${areaCode}-${exchange}-${number}`;
  }

  // 郵便番号生成
  generatePostalCode(cityCode) {
    const cityPostalCodes = {
      'SKK': '410', // 桜花市
      'SKG': '411', // 桜川市
      'HSK': '412', // 東桜市
      'NSK': '413', // 西桜市
      'MSK': '414', // 南桜市
      'KSK': '415'  // 北桜市
    };
    const base = cityPostalCodes[cityCode] || '410';
    const suffix = Math.floor(Math.random() * 9000) + 1000;
    return `${base}-${suffix}`;
  }

  // 収入生成（年齢、職業、地域を考慮）
  generateIncome(age, occupation, districtType) {
    if (age < 20) return 0;
    if (age > 65) return Math.floor(Math.random() * 200) + 100; // 年金

    const baseIncome = {
      professional: 800,
      technical: 600,
      office: 450,
      services: 350,
      manufacturing: 400,
      retail: 320,
      agriculture: 380,
      public: 500,
      transportation: 420,
      other: 400
    };

    const occupationCategory = Object.keys(this.occupations).find(cat =>
      this.occupations[cat].includes(occupation)
    ) || 'other';

    let income = baseIncome[occupationCategory] || 400;

    // 年齢による調整
    if (age >= 40 && age < 60) income *= 1.3;
    if (age >= 30 && age < 40) income *= 1.1;
    if (age >= 20 && age < 30) income *= 0.7;

    // 地域による調整
    const districtMultiplier = {
      central: 1.2,
      industrial: 1.1,
      residential: 1.0,
      tourism: 0.95,
      mixed: 1.05,
      rural: 0.85
    };

    income *= districtMultiplier[districtType] || 1.0;

    return Math.floor(income + (Math.random() - 0.5) * income * 0.3);
  }

  // 職業選択（年齢と地域特性を考慮）
  selectOccupation(age, districtType) {
    if (age < 18) return '学生';
    if (age >= 65) return Math.random() < 0.7 ? '無職' : this.getRandomOccupation(districtType);

    // 地域特性による職業分布
    const districtOccupationWeights = {
      central: { professional: 0.25, office: 0.35, services: 0.20, technical: 0.15, other: 0.05 },
      industrial: { manufacturing: 0.40, technical: 0.25, office: 0.20, transportation: 0.10, other: 0.05 },
      residential: { office: 0.30, services: 0.25, retail: 0.20, professional: 0.15, other: 0.10 },
      tourism: { services: 0.35, retail: 0.25, transportation: 0.15, office: 0.15, other: 0.10 },
      rural: { agriculture: 0.35, manufacturing: 0.20, retail: 0.15, services: 0.15, other: 0.15 },
      mixed: { office: 0.25, services: 0.20, manufacturing: 0.20, retail: 0.15, professional: 0.10, other: 0.10 }
    };

    const weights = districtOccupationWeights[districtType] || districtOccupationWeights.mixed;
    const rand = Math.random();
    let cumulative = 0;

    for (const [category, weight] of Object.entries(weights)) {
      cumulative += weight;
      if (rand < cumulative) {
        const occupations = this.occupations[category];
        return occupations[Math.floor(Math.random() * occupations.length)];
      }
    }

    return this.getRandomOccupation(districtType);
  }

  getRandomOccupation(districtType) {
    const allOccupations = Object.values(this.occupations).flat();
    return allOccupations[Math.floor(Math.random() * allOccupations.length)];
  }

  // 教育レベル決定
  selectEducation(age, occupation) {
    if (age < 6) return '未就学';
    if (age >= 6 && age < 12) return '小学校在学';
    if (age >= 12 && age < 15) return '中学校在学';
    if (age >= 15 && age < 18) return '高等学校在学';
    if (age >= 18 && age < 22) return Math.random() < 0.6 ? '大学在学' : '高等学校卒業';

    // 職業による教育レベル
    const requiresHigherEducation = ['医師', '弁護士', '教師', '会計士', 'エンジニア', '建築士'];
    if (requiresHigherEducation.includes(occupation)) {
      return Math.random() < 0.3 ? '大学院修了' : '大学卒業';
    }

    const rand = Math.random();
    if (rand < 0.35) return '高等学校卒業';
    if (rand < 0.70) return '専門学校卒業';
    if (rand < 0.90) return '大学卒業';
    return '大学院修了';
  }

  // 勤務先選択
  selectEmployer(occupation, age) {
    if (age < 18 || age >= 65) return '';
    if (occupation === '無職' || occupation === '学生') return '';

    // 職業による勤務先タイプ
    const employerTypes = {
      '医師': () => this.companies.large[9], // 桜医療センター
      '看護師': () => this.companies.large[9],
      '教師': () => this.schools[['elementary', 'junior', 'high'][Math.floor(Math.random() * 3)]][Math.floor(Math.random() * 5)],
      '公務員': () => '桜県庁',
      '警察官': () => '桜県警察本部',
      '消防士': () => '桜市消防局',
      '農家': () => '自営業',
      'フリーランス': () => '自営業'
    };

    if (employerTypes[occupation]) {
      return employerTypes[occupation]();
    }

    // その他の職業は企業からランダム選択
    const allCompanies = [...this.companies.large, ...this.companies.medium, ...this.companies.small];
    return allCompanies[Math.floor(Math.random() * allCompanies.length)];
  }

  // 世帯生成
  generateHousehold(districtInfo, householdIndex, startResidentIndex) {
    const householdId = `${districtInfo.code}-H${String(householdIndex).padStart(5, '0')}`;
    const members = [];
    
    // 世帯タイプ決定
    const householdType = this.selectHouseholdType();
    const memberCount = this.getMemberCount(householdType);

    // 世帯主情報
    const headAge = this.getHeadAge(householdType);
    const headGender = Math.random() < 0.7 ? 'male' : 'female';
    const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];

    // 住所情報
    const address = this.generateAddress(districtInfo);

    // 世帯メンバー生成
    for (let i = 0; i < memberCount; i++) {
      const memberInfo = this.generateFamilyMember(
        i, householdType, headAge, headGender, lastName,
        districtInfo, startResidentIndex + i, address
      );
      members.push(memberInfo);
    }

    return {
      householdId,
      type: householdType,
      members,
      address,
      phoneNumber: this.generatePhoneNumber(),
      createdAt: new Date().toISOString()
    };
  }

  // 世帯タイプ選択
  selectHouseholdType() {
    const rand = Math.random();
    if (rand < 0.35) return 'single';         // 単身世帯: 35%
    if (rand < 0.55) return 'couple';         // 夫婦のみ: 20%
    if (rand < 0.80) return 'nuclear';        // 核家族: 25%
    if (rand < 0.90) return 'extended';       // 三世代: 10%
    if (rand < 0.95) return 'single_parent';  // ひとり親: 5%
    return 'other';                           // その他: 5%
  }

  // 世帯人数決定
  getMemberCount(householdType) {
    switch (householdType) {
      case 'single': return 1;
      case 'couple': return 2;
      case 'nuclear': return Math.floor(Math.random() * 3) + 3; // 3-5人
      case 'extended': return Math.floor(Math.random() * 3) + 5; // 5-7人
      case 'single_parent': return Math.floor(Math.random() * 3) + 2; // 2-4人
      default: return Math.floor(Math.random() * 4) + 1; // 1-4人
    }
  }

  // 世帯主年齢決定
  getHeadAge(householdType) {
    switch (householdType) {
      case 'single':
        return Math.random() < 0.5 ? 
          Math.floor(Math.random() * 15) + 25 : // 若年単身
          Math.floor(Math.random() * 20) + 60;  // 高齢単身
      case 'couple':
        return Math.random() < 0.5 ?
          Math.floor(Math.random() * 10) + 25 : // 若年夫婦
          Math.floor(Math.random() * 15) + 55;  // 高齢夫婦
      case 'nuclear':
        return Math.floor(Math.random() * 20) + 30; // 30-49歳
      case 'extended':
        return Math.floor(Math.random() * 15) + 40; // 40-54歳
      case 'single_parent':
        return Math.floor(Math.random() * 20) + 30; // 30-49歳
      default:
        return Math.floor(Math.random() * 40) + 25; // 25-64歳
    }
  }

  // 家族メンバー生成
  generateFamilyMember(index, householdType, headAge, headGender, lastName, districtInfo, residentIndex, address) {
    let age, gender, relationship, firstName;

    if (index === 0) {
      // 世帯主
      age = headAge;
      gender = headGender;
      relationship = 'head';
      firstName = gender === 'male' ? 
        this.maleFirstNames[Math.floor(Math.random() * this.maleFirstNames.length)] :
        this.femaleFirstNames[Math.floor(Math.random() * this.femaleFirstNames.length)];
    } else {
      // その他のメンバー
      const memberInfo = this.generateRelationship(householdType, index, headAge, headGender);
      age = memberInfo.age;
      gender = memberInfo.gender;
      relationship = memberInfo.relationship;
      firstName = gender === 'male' ?
        this.maleFirstNames[Math.floor(Math.random() * this.maleFirstNames.length)] :
        this.femaleFirstNames[Math.floor(Math.random() * this.femaleFirstNames.length)];
    }

    const occupation = this.selectOccupation(age, districtInfo.type);
    const education = this.selectEducation(age, occupation);
    const employer = this.selectEmployer(occupation, age);
    const income = this.generateIncome(age, occupation, districtInfo.type);

    return {
      residentId: this.generateResidentId(districtInfo.cityCode, districtInfo.code, residentIndex),
      name: {
        lastName,
        firstName,
        lastNameKana: this.generateKanaName(lastName),
        firstNameKana: this.generateKanaName(firstName)
      },
      age,
      gender,
      relationship,
      occupation,
      education,
      employer,
      income,
      address,
      registeredDate: this.generateRegistrationDate(age),
      updatedAt: new Date().toISOString()
    };
  }

  // 家族関係生成
  generateRelationship(householdType, index, headAge, headGender) {
    switch (householdType) {
      case 'couple':
        return {
          age: headAge + Math.floor(Math.random() * 6) - 3,
          gender: headGender === 'male' ? 'female' : 'male',
          relationship: 'spouse'
        };
      
      case 'nuclear':
        if (index === 1) {
          // 配偶者
          return {
            age: headAge + Math.floor(Math.random() * 6) - 3,
            gender: headGender === 'male' ? 'female' : 'male',
            relationship: 'spouse'
          };
        } else {
          // 子供
          const maxChildAge = Math.min(headAge - 20, 25);
          return {
            age: Math.floor(Math.random() * maxChildAge),
            gender: Math.random() < 0.5 ? 'male' : 'female',
            relationship: 'child'
          };
        }
      
      case 'extended':
        if (index === 1) {
          // 配偶者
          return {
            age: headAge + Math.floor(Math.random() * 6) - 3,
            gender: headGender === 'male' ? 'female' : 'male',
            relationship: 'spouse'
          };
        } else if (index <= 3) {
          // 子供
          const maxChildAge = Math.min(headAge - 20, 25);
          return {
            age: Math.floor(Math.random() * maxChildAge),
            gender: Math.random() < 0.5 ? 'male' : 'female',
            relationship: 'child'
          };
        } else {
          // 親
          return {
            age: headAge + Math.floor(Math.random() * 10) + 20,
            gender: Math.random() < 0.5 ? 'male' : 'female',
            relationship: 'parent'
          };
        }
      
      case 'single_parent':
        // 子供
        const maxChildAge = Math.min(headAge - 18, 20);
        return {
          age: Math.floor(Math.random() * maxChildAge),
          gender: Math.random() < 0.5 ? 'male' : 'female',
          relationship: 'child'
        };
      
      default:
        return {
          age: Math.floor(Math.random() * 60) + 20,
          gender: Math.random() < 0.5 ? 'male' : 'female',
          relationship: 'other'
        };
    }
  }

  // 住所生成
  generateAddress(districtInfo) {
    const blockNumber = Math.floor(Math.random() * 20) + 1;
    const lotNumber = Math.floor(Math.random() * 30) + 1;
    const buildingTypes = ['', '', '', 'マンション', 'アパート', 'ハイツ', 'コーポ'];
    const buildingType = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
    
    let address = `桜県${districtInfo.cityName}${districtInfo.name}${blockNumber}丁目${lotNumber}番`;
    
    if (buildingType) {
      const buildingNames = ['桜', '東', '西', '南', '北', 'サニー', 'グリーン', 'ホワイト'];
      const buildingName = buildingNames[Math.floor(Math.random() * buildingNames.length)];
      const roomNumber = Math.floor(Math.random() * 999) + 101;
      address += ` ${buildingName}${buildingType}${roomNumber}号室`;
    } else {
      address += `${Math.floor(Math.random() * 10) + 1}号`;
    }
    
    return address;
  }

  // カナ名生成（簡易版）
  generateKanaName(kanjiName) {
    // 実際のプロジェクトではより詳細な漢字->カナ変換が必要
    const kanaMap = {
      '佐藤': 'サトウ', '鈴木': 'スズキ', '高橋': 'タカハシ', '田中': 'タナカ',
      '太郎': 'タロウ', '花子': 'ハナコ', '翔太': 'ショウタ', '美咲': 'ミサキ'
    };
    return kanaMap[kanjiName] || kanjiName;
  }

  // 登録日生成
  generateRegistrationDate(age) {
    const now = new Date();
    const birthYear = now.getFullYear() - age;
    const registrationYear = birthYear + Math.floor(Math.random() * age);
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    return new Date(registrationYear, month, day).toISOString();
  }
}

module.exports = ResidentDataGenerator;