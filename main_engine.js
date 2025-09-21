const SE = [
    new Audio('./SE/キーボード1.mp3'),
    new Audio('./SE/ビープ音5.mp3'),
    new Audio('./SE/琴の滑奏.mp3'),
    new Audio('./SE/データ解析.mp3'),
    new Audio('./SE/決定ボタンを押す7.mp3'),
    new Audio('./SE/大キック.mp3'),
    new Audio('./SE/つるはしで掘る4.mp3'),
    new Audio('./SE/宝箱を開ける.mp3'),
    new Audio('./SE/決定ボタンを押す43.mp3'),
    new Audio('./SE/決定ボタンを押す14.mp3'),
    new Audio('./SE/決定ボタンを押す10.mp3'),
];
const Achievements = [
    
];

// board1
const gauge = document.getElementById('gauge');
const typeSpeed = document.getElementById('typeSpeed');
const maxSpeed = document.getElementById('maxSpeed');
const reflectTime = document.getElementById('reflectTime');
const q = document.getElementById('q');
const KanaArea = document.getElementById('KanaArea');
const reflectRoman = document.getElementById('reflectRoman');
const correctSpell = document.getElementById('correctSpell');
const caret = document.getElementById('caret');

// board2
const level = document.getElementById('level');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const accuracy = document.getElementById('accuracy');
const totalTypeSpeed = document.getElementById('totalTypeSpeed');
const lastRecords = document.getElementById('lastRecords');
const lastRecord_correct = document.getElementById('lastRecord_correct');
const lastRecord_wrong = document.getElementById('lastRecord_wrong');
const lastRecord_accuracy = document.getElementById('lastRecord_accuracy');
const toggle = document.getElementById('toggle');

// footer
const Shiosan = document.getElementById('Shiosan');

// board3
const difficulty = document.querySelectorAll('input[name="difficulty"]');
const aboutThema = document.querySelectorAll('input[name="aboutThema"]');
const fontType = document.querySelectorAll('input[name="fontType"');
const type_sounds = document.querySelectorAll('input[name="type_sounds"');
const language = document.querySelectorAll('input[name="language"]');
const timeRange = document.getElementById('timeRange');

// board4
const reflectQuestion = document.getElementById('reflectQuestion');
const reflectKana = document.getElementById('reflectKana');
const submitBtn1 = document.getElementById('submitBtn1');

// board5
const pressedKey = document.getElementById('pressedKey');

const regex1 = /([ゃゅょぁぃぅぇぉ])/;
const regex2 = /([っ])([かきくけこさしすせそたちつてとはひふへほまみむめもらりるれろわをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽゔ])/;
const regex3 = /([っ])(ぎゃ|ぎぃ|ぎゅ|ぎぇ|ぎょ|しゃ|しぃ|しゅ|しぇ|しょ|じゃ|じぃ|じゅ|じぇ|じょ|ちゃ|ちぃ|ちゅ|ちぇ|ちょ|てゃ|てぃ|てゅ|てぇ|てょ|でゃ|でぃ|でゅ|でぇ|でょ|ぢゃ|びゃ|びぃ|びゅ|びぇ|びょ|ぴゃ|ぴぃ|ぴゅ|ぴぇ|ぴょ|ゔぁ|ゔぃ|ゔぇ|ゔぉ)/;
const regex4 = /([ん])([かきくけこさしすせそたちつてとはひふへほまみむめもらりるれろわをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽー1234567890？！、。])/;
const regex5 = /([ん])(きゃ|きぃ|きゅ|きぇ|きょ|ぎゃ|ぎぃ|ぎゅ|ぎぇ|ぎょ|しゃ|しぃ|しゅ|しぇ|しょ|じゃ|じぃ|じゅ|じぇ|じょ|ちゃ|ちぃ|ちゅ|ちぇ|ちょ|てゃ|てぃ|てゅ|てぇ|てょ|でゃ|でぃ|でゅ|でぇ|でょ|ぢゃ|ふぁ|ふぃ|ふぇ|ふぉ|びゃ|びぃ|びゅ|びぇ|びょ|ぴゃ|ぴぃ|ぴゅ|ぴぇ|ぴょ|ゔぁ|ゔぃ|ゔぇ|ゔぉ)/;
const regex6 = /([bcdfghjklmnpqrstvwxyz])/;

const quesBuffer = [];
const pickKanji = [];
const pickKana = [];
const record_correct = [];
const record_wrong = [];
const record_accuracy = [];
const max_type_time = [];
const selectedRandom = [];
const langProperties = Object.keys(lang);

console.log(aboutThema.item(0).value);

let start = false;
let create = false;
let normal = true;
let light = false;
let comedy = false;
let easy = false;
let normalD = true;
let hard = false;
let impossible = false;
let ja = true;
let en = false;
let end = false;

let start_time = 0;
let end_time = 0;
let random = 0;
let timeIndex = 0;
let culResult = 0;
let enteredIndex = 0;
let correctBuffer = 0;
let correctBuffer2 = 0;
let wrongBuffer = 0;
let questionSteps = 0;
let typeBuffer = 0;
let Num = 0;
let SKPM = 0;
let speed = 0;
let time = 0;

let totalRoman = '';
let selectedWord = '';
let selectedDisplay = '';
let romanBuffer ='';
let expectedValue = '';
let expectedValue2 = '';
let expectedValue3 = '';
let expectedValue4 = '';
let expectedValue5 = '';
let expectedValue6 = '';

// texts
let liveSpeedText = '';
let maxSpeedText = '';
let correctText = '';
let wrongText = '';
let accuracyText = '';
let SpeedUnit = '';
let timesUnit = '';

// 難易度の変更
difficulty.forEach(diffi => {
    diffi.addEventListener('change', () => {
        if(diffi.value === 'Easy') {
            easy = true;
            normalD = false;
            hard = false;
            impossible = false;

        } else if(diffi.value === 'Normal') {
            easy = false;
            normalD = true;
            hard = false;
            impossible = false;

        } else if(diffi.value === 'Hard') {
            questionSteps = 22;

            create = true;
            easy = false;
            normalD = false;
            hard = true;
            impossible = false;

        } else if(diffi.value === 'Impossible') {
            questionSteps = 42;

            create = false;
            easy = false;
            normalD = false;
            hard = false;
            impossible = true;

        }
    });
});
// テーマの変更
aboutThema.forEach(radio => {
    radio.addEventListener('change', () => {
        const background = document.getElementById('background');
        const board2 = document.getElementById('board2');
        const board3 = document.getElementById('board3');

        if(radio.value === 'Japanese_modern') {
            background.classList.add('Japanese_modern');
            background.classList.remove('dark');
            background.classList.remove('gradation');
            board2.classList.remove('shadow');
            board3.classList.remove('shadow');

            SE[2].currentTime = 0;
            SE[2].volume = 0.1;
            SE[2].play();

        } else if(radio.value === 'gradation') {
            background.classList.add('gradation');
            background.classList.remove('dark');
            background.classList.remove('Japanese_modern');
            board2.classList.add('shadow');
            board3.classList.add('shadow');

        } else if(radio.value === 'dark') {
            background.classList.add('dark');
            background.classList.remove('Japanese_modern');
            background.classList.remove('gradation');
            board2.classList.remove('shadow');
            board3.classList.remove('shadow');

            SE[3].currentTime = 0;
            SE[3].volume = 0.1;
            SE[3].play();

        }
    });
});
// フォントの変更
fontType.forEach(type => {
    type.addEventListener('change', () => {
        const html = document.getElementById('html');
        if(type.value === 'Mochi') {
            html.classList.add('Mochi');
            html.classList.remove('Dot');
            html.classList.remove('Yusei');
            html.classList.remove('Rockn');

        } else if(type.value === 'Dot') {
            html.classList.add('Dot');
            html.classList.remove('Mochi');
            html.classList.remove('Yusei');
            html.classList.remove('Rockn');

        } else if(type.value === 'Yusei') {
            html.classList.add('Yusei');
            html.classList.remove('Mochi');
            html.classList.remove('Dot');
            html.classList.remove('Rockn');

        } else if(type.value === 'Rockn') {
            html.classList.add('Rockn');
            html.classList.remove('Mochi');
            html.classList.remove('Dot');
            html.classList.remove('Yusei');

        }
    });
});
// タイプ音の変更
type_sounds.forEach(sound_type => {
    sound_type.addEventListener('change', () => {
        if(sound_type.value === 'normal') {
            normal = true;
            light = false;
            comedy = false;

        } else if(sound_type.value === 'light') {
            normal = false;
            light = true;
            comedy = false;

        } else if(sound_type.value === 'comedy') {
            normal = false;
            light = false;
            comedy = true;

        } else if(sound_type.value === 'off') {
            normal = false;
            light = false;
            comedy = false;
        }
    });
});
language.forEach(langType => {
    langType.addEventListener('change', () => {
        if(langType.value === 'Japanese') {
            ja = true;
            en = false;

        } else {
            ja = false;
            en = true;

        }
    });
});
timeRange.addEventListener('input', () => {
    document.getElementById('valueTime').innerText = String(timeRange.value);

});


toggle.addEventListener('change', () => {
    if(!KanaArea.textContent) {
        KanaArea.innerText = 'ここに読み仮名が表示されます';

    } else {
        KanaArea.textContent = '';

    }
});
Shiosan.addEventListener('click', () => {
    if(Num > 29) {
        SE[6].currentTime = 0;
        SE[6].play();

    } else {
        Num++;
        Shiosan.style.paddingLeft = Num + 'px';

    }
});
submitBtn1.addEventListener('click', () => {
    if(reflectQuestion.value && reflectKana.value) {
        words2[reflectQuestion.value] = reflectKana.value;

        reflectQuestion.classList.remove('notFilledIn');
        reflectQuestion.placeholder = '';
        reflectQuestion.value = '';

        reflectKana.classList.remove('notFilledIn');
        reflectKana.placeholder = '';
        reflectKana.value = '';

    } else if(!reflectQuestion.value && !reflectKana.value) {
        reflectQuestion.classList.add('notFilledIn');
        reflectQuestion.placeholder = '入力してください';

        reflectKana.classList.add('notFilledIn');
        reflectKana.placeholder = '入力してください';

    } else if(!reflectQuestion.value) {
        reflectQuestion.classList.add('notFilledIn');
        reflectQuestion.placeholder = '入力してください';

    } else {
        reflectKana.classList.add('notFilledIn');
        reflectKana.placeholder = '入力してください';

    }
});
document.addEventListener('keydown', (e) => {
    // タイピングゲーム開始のイベント
    if(e.key === ' ' && !start && !end) {
        // start_time = performance.now();
        e.preventDefault();
        reflectRoman.innerText = '';
        setWord();
        timer();
    }
    if(e.key !== ' ' & start) {
        romanBuffer += e.key;
        typeBuffer++;
        enteredIndex++;

        judge();
    }
    if(e.key === 'Escape' && end) {
        totalRoman = '';
        selectedWord = '';
        selectedDisplay = '';
        romanBuffer ='';
        expectedValue = '';
        expectedValue2 = '';
        expectedValue3 = '';

        culResult = 0;
        enteredIndex = 0;
        selectedRandom.length = 0;
        quesBuffer.length = 0;
        correctBuffer = 0;
        correctBuffer2 = 0;
        wrongBuffer = 0;
        timeIndex = timeRange.value;
        if(impossible) {
            create = false;
            questionSteps = 43;

        } else if(hard) {
            create = true;
            questionSteps = 22;

        } else {
            create = false;
            questionSteps = 0;

        }

        maxSpeed.innerText = '';
        q.innerText = 'Spaceキーを押してください';
        correct.innerText = '';
        wrong.innerText = '';
        accuracy.innerText = '';
        reflectRoman.innerText = 'Please press Space';
        caret.innerText = '';
        lastRecords.innerText = '';
        lastRecord_correct.innerText = '';
        lastRecord_wrong.innerText = '';
        lastRecord_accuracy.innerText = '';
        level.innerText = '';
        typeSpeed.innerText = '0';
        totalTypeSpeed.innerText = '0';
        reflectTime.innerText = '残り時間：';
        if(KanaArea.textContent) {
            KanaArea.innerText = 'ここに読み仮名が表示されます';

        } else {
            KanaArea.innerText = ''

        }
        level.classList.remove('greenyellow');
        level.classList.remove('colored');
        level.classList.remove('blackred');

        pickKanji.length = 0;
        pickKana.length = 0;

        end = false;
    }
    pressedKey.innerText = e.key;
    if(pressedKey.textContent === ' ') {
        pressedKey.innerText = e.code;

    }
    
});

const setWord = () => {
    start_time = performance.now();
    if(!start) timeIndex = timeRange.value;
    start = true;
    if(questionSteps === 7 || questionSteps === 14 || questionSteps === 21 || questionSteps === 28 || questionSteps === 35 || questionSteps === 42 || questionSteps === 49) {
        SE[8].currentTime = 0;
        SE[8].volume = 0.5;
        SE[8].play();

    } else {
        SE[7].currentTime = 0;
        SE[7].volume = 0.5;
        SE[7].play();

    }

    // createは、スイッチの役割
    if(!create && questionSteps < 7) {
        for(const buffer in words2) {
            pickKanji.push(buffer);
            pickKana.push(words2[buffer]);
        }
        create = true;

    } else if(create && questionSteps >= 7 && questionSteps < 14) {
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in words3) {
            pickKanji.push(buffer);
            pickKana.push(words3[buffer]);
        }
        create = false;
        selectedRandom.length = 0;

    } else if(!create && questionSteps >= 14 && questionSteps < 21) {
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in words4) {
            pickKanji.push(buffer);
            pickKana.push(words4[buffer]);
        }
        create = true;
        selectedRandom.length = 0;

    } else if(create && questionSteps >= 21 && questionSteps < 28) {
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in words5) {
            pickKanji.push(buffer);
            pickKana.push(words5[buffer]);
        }
        create = false;
        selectedRandom.length = 0;

    } else if(!create && questionSteps >= 28 && questionSteps < 35) {
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in words6) {
            pickKanji.push(buffer);
            pickKana.push(words6[buffer]);
        }
        create = true;
        selectedRandom.length = 0;

    } else if(create && questionSteps >= 35 && questionSteps < 42) {
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in words7) {
            pickKanji.push(buffer);
            pickKana.push(words7[buffer]);
        }
        create = false;
        selectedRandom.length = 0;

    } else if(!create && questionSteps >= 42 && questionSteps < 49) {
        console.log('kitade');
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in wordsNoLimit) {
            pickKanji.push(buffer);
            pickKana.push(wordsNoLimit[buffer]);
        }
        create = true;
        selectedRandom.length = 0;

    }
    console.log(pickKanji);
    // 乱数を生成
    random = Math.floor(Math.random() * pickKanji.length);

    if(questionSteps < 7) {
        level.innerText = 'Possible';
        level.classList.add('greenyellow');

    } else if(questionSteps >= 7 && questionSteps < 14) {
        level.innerText = 'Prologue';
        level.classList.remove('greenyellow');

    } else if(questionSteps >= 14 && questionSteps < 21) {
        level.innerText = 'Cant Say Anything';

    } else if(questionSteps >= 21 && questionSteps < 28) {
        level.innerText = 'Hard';

    } else if(questionSteps >= 28 && questionSteps < 35) {
        level.innerText = 'Very Hard';

    } else if(questionSteps >= 35 && questionSteps < 42) {
        level.innerText = 'No Way';
        level.classList.add('colored');

    } else if(questionSteps >= 42 && questionSteps < 49) {
        level.innerText = 'Impossible';
        level.classList.remove('colored');
        level.classList.add('blackred');

    }
    if(easy) {
        questionSteps = 0;

    } else if(hard) {
        questionSteps = 22;

    } else if(impossible) {
        questionSteps = 42;

    } else {
        questionSteps++;

    }

    selectedWord = pickKana[random];
    selectedDisplay = pickKanji[random];

    q.innerText = selectedDisplay;

    if(KanaArea.textContent) {
        KanaArea.innerText = selectedWord;

    }
    if(!easy && !hard && !impossible) {
        console.log('koko');
        pickKanji.splice(random, 1);
        pickKana.splice(random, 1);

    }

    if(pickKanji.length === 0) {
        console.log('end');
        start = false;
        create = false;
        end = true;
        return;

    }

    // 配列に問題文を格納
    quesBuffer.push(...Array.from(selectedWord));

    judgeCons();

    // 入力が予測されるローマ字を変数に代入
    if(expectedValue) return;
    expectedValue = romanMap[selectedWord[0]];
    expectedValue2 = romanMap2[selectedWord[0]];
    expectedValue3 = romanMap3[selectedWord[0]];
};
const timer = () => {
    reflectTime.innerText = '残り時間：' + timeIndex + '秒';
    setTime = setInterval(() => {
        timeIndex--;
        reflectTime.innerText = '残り時間：' + timeIndex + '秒';

        if(reflectTime.textContent == '残り時間：0秒') {
            clearInterval(setTime);
            SE[10].currentTime = 0;
            SE[10].volume = 0.7;
            SE[10].play();
            calSKPM();

            start = false;
            end = true;
            
            caret.innerText = '>>end --Press Escape';
            correctSpell.innerText = '';
            totalTypeSpeed.innerText = String(SKPM);

            record_correct.push(correctBuffer2);
            record_wrong.push(wrongBuffer);
            record_accuracy.push(SKPM);
            console.log(record_accuracy);

            if(record_correct[1]) {
                lastRecords.innerText = '>>前回の記録';
                lastRecord_correct.innerText = '正：' + record_correct[0];
                lastRecord_wrong.innerText = '誤：' + record_wrong[0];
                lastRecord_accuracy.innerText = 'SKPM：' + record_accuracy[0];
 
                record_correct.shift();
                record_wrong.shift();
                record_accuracy.shift();

            }
            // BGM[0].currentTime = 0;
            // BGM[0].pause();

        }
    }, 1000);
};
const judge = () => {
    if(romanBuffer === expectedValue[0]) {
        // もしほかの予想される一文字目とアルファベットが同じなら両方の一文字目を削除する
        if(expectedValue[0] === expectedValue2[0] && expectedValue2[0] === expectedValue3[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            expectedValue3 = expectedValue3.slice(1);

        } else if(expectedValue[0] === expectedValue3[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue3 = expectedValue3.slice(1);

        } else if(expectedValue[0] === expectedValue2[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);

        } else {
            expectedValue = expectedValue.slice(1);
        }

        correctCal();
        ringCorrectSE();

        romanBuffer = '';
        if(correctSpell.textContent) {
            correctSpell.innerText = '';
        }

    } else if(romanBuffer === expectedValue2[0]) {
        // もしほかの予想される一文字目とアルファベットが同じなら両方の一文字目を削除する
        if(expectedValue2[0] === expectedValue[0]) {
            expectedValue2 = expectedValue2.slice(1);
            expectedValue = expectedValue.slice(1);

        } else if(expectedValue2[0] === expectedValue3[0]) {
            expectedValue2 = expectedValue2.slice(1);
            expectedValue3 = expectedValue3.slice(1);

        } else {
            expectedValue2 = expectedValue2.slice(1);
        }

        correctCal();
        ringCorrectSE();

        romanBuffer = '';
        if(correctSpell.textContent) {
            correctSpell.innerText = '';
        }

    } else if(romanBuffer === expectedValue3[0]) {
        // もしほかの予想される一文字目とアルファベットが同じなら両方の一文字目を削除する
        if(expectedValue3[0] === expectedValue[0]) {
            expectedValue3 = expectedValue3.slice(1);
            expectedValue = expectedValue.slice(1);

        } else if(expectedValue3[0] === expectedValue2[0]) {
            expectedValue3 = expectedValue3.slice(1);
            expectedValue2 = expectedValue2.slice(1);

        } else {
            expectedValue3 = expectedValue3.slice(1);

        }

        correctCal();
        ringCorrectSE();

        romanBuffer = '';
        if(correctSpell.textContent) {
            correctSpell.innerText = '';
        }

    } else {
        wrongCal();
        SE[1].currentTime = 0;
        SE[1].volume = 0.5;
        SE[1].play();

        correctSpell.innerText = expectedValue[0];
        romanBuffer = '';

    }
    if(expectedValue === '' || expectedValue2 === '' || expectedValue3 === '') {
        quesBuffer.shift();
        selectedWord = quesBuffer.join('');

        // 予測をすべてリセット
        expectedValue = '';
        expectedValue2 = '';
        expectedValue3 = '';

        judgeCons();

        if(quesBuffer.length === 0) {
            typeBuffer = 0;
            correctBuffer = 0;
            totalRoman = '';
            reflectRoman.innerText = '';

            console.log('--Next-Question--');

            setWord();
            return;

        }

        // 入力が予測されるローマ字を配列内のひらがなから検索しその結果を変数に代入
        if(expectedValue) return;
        expectedValue = romanMap[quesBuffer[0]];
        expectedValue2 = romanMap2[quesBuffer[0]];
        expectedValue3 = romanMap3[quesBuffer[0]];

    }
};

const correctCal = () => {
    if(ja) {
        correctText = langProperties[3];
        accuracyText = langProperties[5];
        timesUnit = langProperties[14];

    } else if(en) {
        correctText = lang[langProperties[3]];
        accuracyText = lang[langProperties[5]];
        timesUnit = lang[langProperties[14]];

    }

    correctBuffer2++;
    correct.innerText = correctText + String(correctBuffer2);
    correctBuffer++;

    totalRoman += romanBuffer;
   
    culResult = Number(correctBuffer2) / enteredIndex * 100;

    reflectRoman.innerText = totalRoman;
    accuracy.innerText = accuracyText + culResult.toFixed(1) + '%';
};
const wrongCal = () => {
    if(ja) {
        wrongText = langProperties[4];
        accuracyText = langProperties[5];
        timesUnit = langProperties[14];

    } else if(en) {
        wrongText = lang[langProperties[4]];
        accuracyText = lang[langProperties[5]];
        timesUnit = lang[langProperties[14]];

    }

    wrongBuffer++;

    wrong.innerText = wrongText + String(wrongBuffer) + timesUnit;
        
    culResult = Number(correctBuffer2) / enteredIndex * 100;

    accuracy.innerText = accuracyText + culResult.toFixed(1) + '%';
};
const calSKPM = () => {
    SKPM = ((correctBuffer2 / 5 / (timeRange.value / 60) - wrongBuffer) * 2).toFixed(1);

};
const liveCal = () => {
    cal = setInterval(() => {
        if(ja) {
            liveSpeedText = langProperties[0];
            maxSpeedText = langProperties[2];
            SpeedUnit = langProperties[1];

        } else if(en) {
            liveSpeedText = lang[langProperties[0]];
            maxSpeedText = lang[langProperties[2]];
            SpeedUnit = lang[langProperties[1]];

        }

        end_time = performance.now();
        time = (end_time - start_time) / 1000;
        speed = correctBuffer / time;
        max_type_time.push(speed);
        typeSpeed.innerText = liveSpeedText + String(speed.toFixed(1)) + SpeedUnit;

        const max = max_type_time.reduce((acc, cur) => {
            return cur > acc ? cur : acc;
        },max_type_time[0]);

        maxSpeed.innerText = maxSpeedText + String(max.toFixed(1)) + SpeedUnit;

        gauge.style.width = speed * 20 + 'px';
    }, 40);
};
liveCal();

const ringCorrectSE = () => {
    if(normal) {
        SE[0].currentTime = 0;
        SE[0].volume = 0.7;
        SE[0].play();

    } else if(light) {
        SE[4].currentTime = 0;
        SE[4].volume = 0.7;
        SE[4].play();

    } else if(comedy) {
        SE[5].currentTime = 0;
        SE[5].volume = 0.5;
        SE[5].play();

    }

};

const judgeCons = () => {
    if(regex1.test(quesBuffer[0] + quesBuffer[1])) {
        // じょなどのじ+ょの組み合わせにマッチ
        expectedValue = romanMap[selectedWord[0] + selectedWord[1]];
        expectedValue2 = romanMap2[selectedWord[0] + selectedWord[1]];
        expectedValue3 = romanMap3[selectedWord[0] + selectedWord[1]];

        // じ+ょを一文字にする
        quesBuffer.splice(0, 2, quesBuffer[0] + quesBuffer[1]);

    } else if(regex2.test(quesBuffer[0] + quesBuffer[1]) && !regex1.test(quesBuffer[2])) {
        // った・っしなどのっ+たの組み合わせにマッチ
        const consonant = romanMap[quesBuffer[1]][0];
        const consonant2 = romanMap2[quesBuffer[1]][0];
        const consonant3 = romanMap3[quesBuffer[1]][0];
        const consonant4 = romanMap3[quesBuffer[1]][1];

        const vowel = romanMap[quesBuffer[1]][1];
        
        expectedValue = consonant + consonant + vowel;
        expectedValue2 = consonant2 + consonant2 + vowel;
        expectedValue3 = consonant3 + consonant3 + consonant4 + vowel;
        // sshiに対応する
        if(consonant4 === vowel) {
            expectedValue3 = consonant3 + consonant3 + vowel;
        }

        // っ+たを一文字にする
        quesBuffer.splice(0, 2, quesBuffer[0] + quesBuffer[1]);

    } else if(regex3.test(quesBuffer[0] + quesBuffer[1] + quesBuffer[2])) {
        // っちゃ・っしゃなどのっ+ちゃの組み合わせにマッチ
        quesBuffer.splice(1, 2, quesBuffer[1] + quesBuffer[2]);
        const consonant = romanMap[quesBuffer[1]][0];
        const consonant2 = romanMap2[quesBuffer[1]][0];
        const consonant3 = romanMap3[quesBuffer[1]][0];

        const consonant5 = romanMap[quesBuffer[1]][1];
        const consonant6 = romanMap2[quesBuffer[1]][1];
        const consonant7 = romanMap3[quesBuffer[1]][1];

        const vowel = romanMap[quesBuffer[1]][2];

        expectedValue = consonant + consonant + consonant5 + vowel;
        expectedValue2 = consonant2 + consonant2 + consonant6 + vowel;
        expectedValue3 = consonant3 + consonant3 + consonant7 + vowel;

        // っ+ちゃを一文字にする
        quesBuffer.splice(0, 2, quesBuffer[0] + quesBuffer[1]);

    } else if(regex4.test(quesBuffer[0] + quesBuffer[1]) && !regex1.test(quesBuffer[2])) {
        // んかなどのん+かの組み合わせにマッチ
        const consonant = romanMap[quesBuffer[0]][0];
        const consonant2 = romanMap[quesBuffer[0]];
        const consonant3 = romanMap2[quesBuffer[0]];

        expectedValue = consonant + romanMap[quesBuffer[1]];
        expectedValue2 = consonant + romanMap2[quesBuffer[1]];
        expectedValue3 = consonant + romanMap3[quesBuffer[1]];

        expectedValue4 = consonant2 + romanMap[quesBuffer[1]];
        expectedValue5 = consonant2 + romanMap2[quesBuffer[1]];
        expectedValue6 = consonant2 + romanMap3[quesBuffer[1]];

        // ん+かを一文字にする
        quesBuffer.splice(0, 2, quesBuffer[0] + quesBuffer[1]);

    } else if(regex5.test(quesBuffer[0] + quesBuffer[1] + quesBuffer[2])) {
        // んぎゃなどのん+ぎゃの組み合わせにマッチ
        quesBuffer.splice(1, 2, quesBuffer[1] + quesBuffer[2]);
        const consonant = romanMap[quesBuffer[0]][0];

        expectedValue = consonant + romanMap[quesBuffer[1]];
        expectedValue2 = consonant + romanMap2[quesBuffer[1]];
        expectedValue3 = consonant + romanMap3[quesBuffer[1]];

        // ん+ぎゃを一文字にする
        quesBuffer.splice(0, 2, quesBuffer[0] + quesBuffer[1]);

    }
};
