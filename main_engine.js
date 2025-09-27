const getDeviceType = () => {
    const navi = navigator.userAgent;
    const width = window.innerWidth;

    if(/Mobi|iPhone|Android.+Mobile/.test(navi)) {
        document.getElementById('warning1').innerText = 'スマートフォンからプレイする場合、効果音がオンになっているとサイトが正常に動作しません。';
        document.getElementById('warning2').innerText = 'お手数ですがすべての効果音をオフにしてください';

    } else if(/Tablet|iPad|Android(?!.*Mobile)/.test(navi)) {
        document.getElementById('warning1').innerText = 'スマートフォンからプレイする場合、効果音がオンになっているとサイトが正常に動作しません。';
        document.getElementById('warning2').innerText = 'お手数ですがすべての効果音をオフにしてください';

    }

};
getDeviceType();

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

// board1
const gauge = document.getElementById('gauge');
const typeSpeed = document.getElementById('typeSpeed');
const maxSpeed = document.getElementById('maxSpeed');
const reflectTime = document.getElementById('reflectTime');
const combo = document.getElementById('combo');
const q = document.getElementById('q');
const KanaArea = document.getElementById('KanaArea');
const reflectRoman = document.getElementById('reflectRoman');
const correctSpell = document.getElementById('correctSpell');
const caret = document.getElementById('caret');

// keyboard
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n0 = document.getElementById('n0');
const mi = document.getElementById('mi');
const iq = document.getElementById('iq');
const Q = document.getElementById('Q');
const W = document.getElementById('W');
const E = document.getElementById('E');
const R = document.getElementById('R');
const T = document.getElementById('T');
const Y = document.getElementById('Y');
const U = document.getElementById('U');
const I = document.getElementById('I');
const O = document.getElementById('O');
const P = document.getElementById('P');
const par = document.getElementById('par');
const A = document.getElementById('A');
const S = document.getElementById('S');
const D = document.getElementById('D');
const F = document.getElementById('F');
const G = document.getElementById('G');
const H = document.getElementById('H');
const J = document.getElementById('J');
const K = document.getElementById('K');
const L = document.getElementById('L');
const co = document.getElementById('co');
const Z = document.getElementById('Z');
const X = document.getElementById('X');
const C = document.getElementById('C');
const V = document.getElementById('V');
const B = document.getElementById('B');
const N = document.getElementById('N')
const M = document.getElementById('M');
const ap = document.getElementById('ap');
const pi = document.getElementById('pi');
const space = document.getElementById('space');

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
const lastRecord_SKPM = document.getElementById('lastRecord_SKPM');
const toggle = document.getElementById('toggle');

// board3
const difficulty = document.querySelectorAll('input[name="difficulty"]');
const aboutThema = document.querySelectorAll('input[name="aboutThema"]');
const fontType = document.querySelectorAll('input[name="fontType"');
const type_sounds = document.querySelectorAll('input[name="type_sounds"');
const game_mode_select = document.querySelectorAll('input[name="game_mode_select"]');
const timeRange = document.getElementById('timeRange');

// board4
const reflectQuestion = document.getElementById('reflectQuestion');
const reflectKana = document.getElementById('reflectKana');
const submitBtn1 = document.getElementById('submitBtn1');

// board5
const sound_off = document.getElementById('sound_off');
const keyboard_switch = document.getElementById('keyboard_switch');
const Shiosan = document.getElementById('Shiosan');

const regex1 = /([ゃゅょぁぃぅぇぉ])/;
const regex2 = /([っ])([かきくけこさしすせそたちつてとはひふへほまみむめもらりるれろわをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽゔ])/;
const regex3 = /([っ])(ぎゃ|ぎぃ|ぎゅ|ぎぇ|ぎょ|しゃ|しぃ|しゅ|しぇ|しょ|じゃ|じぃ|じゅ|じぇ|じょ|ちゃ|ちぃ|ちゅ|ちぇ|ちょ|てゃ|てぃ|てゅ|てぇ|てょ|でゃ|でぃ|でゅ|でぇ|でょ|ぢゃ|びゃ|びぃ|びゅ|びぇ|びょ|ぴゃ|ぴぃ|ぴゅ|ぴぇ|ぴょ|みゃ|みぃ|みゅ|みぇ|みょ|りゃ|りぃ|りゅ|りぇ|りょ|ゔぁ|ゔぃ|ゔぇ|ゔぉ)/;
const regex4 = /([ん])([かきくけこさしすせそたちつてとはひふへほまみむめもらりるれろわをがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽー1234567890？！、。])/;
const regex5 = /([ん])(きゃ|きぃ|きゅ|きぇ|きょ|ぎゃ|ぎぃ|ぎゅ|ぎぇ|ぎょ|しゃ|しぃ|しゅ|しぇ|しょ|じゃ|じぃ|じゅ|じぇ|じょ|ちゃ|ちぃ|ちゅ|ちぇ|ちょ|てゃ|てぃ|てゅ|てぇ|てょ|でゃ|でぃ|でゅ|でぇ|でょ|ぢゃ|ふぁ|ふぃ|ふぇ|ふぉ|びゃ|びぃ|びゅ|びぇ|びょ|ぴゃ|ぴぃ|ぴゅ|ぴぇ|ぴょ|みゃ|みぃ|みゅ|みぇ|みょ|りゃ|りぃ|りゅ|りぇ|りょ|ゔぁ|ゔぃ|ゔぇ|ゔぉ)/;

const quesBuffer = [];
const pickKanji = [];
const pickKana = [];
const record_correct = [];
const record_wrong = [];
const record_accuracy = [];
const record_SKPM = [];
const max_type_time = [];
const selectedRandom = [];
const romanBuffer2 = [];

console.log(aboutThema.item(0).value);

let start = false;
let off = false;
let create = false;
let normal = true;
let light = false;
let comedy = false;
let easy = false;
let normalD = true;
let hard = false;
let impossible = false;
let hurryUp = false;
let none = true;
let first = true;
let second = true;
let third = true;
let showKeyboard = true;
let end = false;

let start_time = 0;
let end_time = 0;
let random = 0;
let LIMIT_TIME = 0;
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
game_mode_select.forEach(game_mode => {
    game_mode.addEventListener('change', () => {
        if(game_mode.value === 'hurryUp') {
            hurryUp = true;
            none = false;

        } else if(game_mode.value === 'none') {
            hurryUp = false;
            none = true;

        }

    })

})
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
sound_off.addEventListener('change', () => {
    if(!off) {
        off = true;

    } else {
        off = false;

    }

});
keyboard_switch.addEventListener('change', () => {
    if(showKeyboard) {
        showKeyboard = false;
        document.getElementById('keyboard').classList.add('hidden');

    } else {
        showKeyboard = true;
        document.getElementById('keyboard').classList.remove('hidden');

    }

})
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
    if(e.key !== 'Shift' && e.key !== 'S' && start) {
        romanBuffer += e.key;
        typeBuffer++;
        enteredIndex++;

        judge();
    }

    if(e.key === ' ' && !start && !end) {
        // start_time = performance.now();
        if(document.getElementById('warning1').textContent) {
            document.getElementById('warning1').innerText = '';
            document.getElementById('warning2').innerText = '';

        }
        e.preventDefault();
        reflectRoman.innerText = '';
        setWord();
        timer();
    }
    if(e.key === 'S' && start && !end) {
        end = true;
        start = false;
        caret.innerText = '>>end --Press Escape';
        correctSpell.innerText = '';
        clearInterval(setTime);


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
        LIMIT_TIME = timeRange.value;
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
        correct.innerText = '0';
        wrong.innerText = '0';
        accuracy.innerText = '0';
        reflectRoman.innerText = 'Shift + s でリセット';
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

    if(!showKeyboard) return;
    if(e.key === ' ') space.classList.add('pressed2');
    if(e.key === '1') n1.classList.add('pressed');
    if(e.key === '2') n2.classList.add('pressed');
    if(e.key === '3') n3.classList.add('pressed');
    if(e.key === '4') n4.classList.add('pressed');
    if(e.key === '5') n5.classList.add('pressed');
    if(e.key === '6') n6.classList.add('pressed');
    if(e.key === '7') n7.classList.add('pressed');
    if(e.key === '8') n8.classList.add('pressed');
    if(e.key === '9') n9.classList.add('pressed');
    if(e.key === '0') n0.classList.add('pressed');
    if(e.key === '-') mi.classList.add('pressed');
    if(e.key === '=') iq.classList.add('pressed');

    if(e.key === 'q') Q.classList.add('pressed');
    if(e.key === 'w') W.classList.add('pressed');
    if(e.key === 'e') E.classList.add('pressed');
    if(e.key === 'r') R.classList.add('pressed');
    if(e.key === 't') T.classList.add('pressed');
    if(e.key === 'y') Y.classList.add('pressed');
    if(e.key === 'u') U.classList.add('pressed');
    if(e.key === 'i') I.classList.add('pressed');
    if(e.key === 'o') O.classList.add('pressed');
    if(e.key === 'p') P.classList.add('pressed');
    if(e.key === '{') par.classList.add('pressed');
    
    if(e.key === 'a') A.classList.add('pressed');
    if(e.key === 's') S.classList.add('pressed');
    if(e.key === 'd') D.classList.add('pressed');
    if(e.key === 'f') F.classList.add('pressed');
    if(e.key === 'g') G.classList.add('pressed');
    if(e.key === 'h') H.classList.add('pressed');
    if(e.key === 'j') J.classList.add('pressed');
    if(e.key === 'k') K.classList.add('pressed');
    if(e.key === 'l') L.classList.add('pressed');
    if(e.key === ';') co.classList.add('pressed');
    
    if(e.key === 'z') Z.classList.add('pressed');
    if(e.key === 'x') X.classList.add('pressed');
    if(e.key === 'c') C.classList.add('pressed');
    if(e.key === 'v') V.classList.add('pressed');
    if(e.key === 'b') B.classList.add('pressed');
    if(e.key === 'n') N.classList.add('pressed');
    if(e.key === 'm') M.classList.add('pressed');
    if(e.key === ',') ap.classList.add('pressed');
    if(e.key === '.') pi.classList.add('pressed');
    
}, {passive: false} );
document.addEventListener('keyup', (e) => {
    if(!showKeyboard) return;
    if(e.key === '1') n1.classList.remove('pressed');
    if(e.key === '2') n2.classList.remove('pressed');
    if(e.key === '3') n3.classList.remove('pressed');
    if(e.key === '4') n4.classList.remove('pressed');
    if(e.key === '5') n5.classList.remove('pressed');
    if(e.key === '6') n6.classList.remove('pressed');
    if(e.key === '7') n7.classList.remove('pressed');
    if(e.key === '8') n8.classList.remove('pressed');
    if(e.key === '9') n9.classList.remove('pressed');
    if(e.key === '0') n0.classList.remove('pressed');
    if(e.key === '-') mi.classList.remove('pressed');
    if(e.key === '=') iq.classList.remove('pressed');

    if(e.key === 'q') Q.classList.remove('pressed');
    if(e.key === 'w') W.classList.remove('pressed');
    if(e.key === 'e') E.classList.remove('pressed');
    if(e.key === 'r') R.classList.remove('pressed');
    if(e.key === 't') T.classList.remove('pressed');
    if(e.key === 'y') Y.classList.remove('pressed');
    if(e.key === 'u') U.classList.remove('pressed');
    if(e.key === 'i') I.classList.remove('pressed');
    if(e.key === 'o') O.classList.remove('pressed');
    if(e.key === 'p') P.classList.remove('pressed');
    if(e.key === '{') par.classList.remove('pressed');
    if(e.key === '[') par.classList.remove('pressed');
    
    if(e.key === 'a') A.classList.remove('pressed');
    if(e.key === 's') S.classList.remove('pressed');
    if(e.key === 'd') D.classList.remove('pressed');
    if(e.key === 'f') F.classList.remove('pressed');
    if(e.key === 'g') G.classList.remove('pressed');
    if(e.key === 'h') H.classList.remove('pressed');
    if(e.key === 'j') J.classList.remove('pressed');
    if(e.key === 'k') K.classList.remove('pressed');
    if(e.key === 'l') L.classList.remove('pressed');
    if(e.key === ';') co.classList.remove('pressed');
    
    if(e.key === 'z') Z.classList.remove('pressed');
    if(e.key === 'x') X.classList.remove('pressed');
    if(e.key === 'c') C.classList.remove('pressed');
    if(e.key === 'v') V.classList.remove('pressed');
    if(e.key === 'b') B.classList.remove('pressed');
    if(e.key === 'n') N.classList.remove('pressed');
    if(e.key === 'm') M.classList.remove('pressed');
    if(e.key === ',') ap.classList.remove('pressed');
    if(e.key === '.') pi.classList.remove('pressed');

    if(e.key === ' ') space.classList.remove('pressed2');

})

const setWord = () => {
    start_time = performance.now();
    if(!start) {
        LIMIT_TIME = timeRange.value
        game_start_time = performance.now();
    };
    start = true;
    if(questionSteps === 7 || questionSteps === 14 || questionSteps === 21 || questionSteps === 28 || questionSteps === 35 || questionSteps === 42 || questionSteps === 49) {
        if(!off) {
            SE[8].currentTime = 0;
            SE[8].volume = 0.5;
            SE[8].play();

        }

    } else {
        if(!off) {
            SE[7].currentTime = 0;
            SE[7].volume = 0.5;
            SE[7].play();

        }

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
        pickKanji.length = 0;
        pickKana.length = 0;

        for(const buffer in wordsNoLimit) {
            pickKanji.push(buffer);
            pickKana.push(wordsNoLimit[buffer]);
        }
        create = true;
        selectedRandom.length = 0;

    }
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

    } else {
        questionSteps++;

    }

    selectedWord = pickKana[random];
    selectedDisplay = pickKanji[random];

    q.innerText = selectedDisplay;

    if(KanaArea.textContent) {
        KanaArea.innerText = selectedWord;

    }
    pickKanji.splice(random, 1);
    pickKana.splice(random, 1);

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
    reflectTime.innerText = '残り時間：' + LIMIT_TIME + '秒';
    setTime = setInterval(() => {
        LIMIT_TIME--;
        reflectTime.innerText = '残り時間：' + LIMIT_TIME + '秒';

        if(reflectTime.textContent == '残り時間：0秒') {
            clearInterval(setTime);
            if(!off) {
                SE[10].currentTime = 0;
                SE[10].volume = 0.7;
                SE[10].play();

            }
            calSKPM();

            start = false;
            end = true;
            
            caret.innerText = '>>end --Press Escape';
            correctSpell.innerText = '';
            totalTypeSpeed.innerText = String(SKPM);

            record_correct.push(correctBuffer2);
            record_wrong.push(wrongBuffer);
            record_accuracy.push(culResult);
            record_SKPM.push(SKPM);

        }
        if(record_correct[1]) {
            lastRecords.innerText = '>>前回の記録';
            lastRecord_correct.innerText = '正：' + record_correct[0] + '回';
            lastRecord_wrong.innerText = '誤：' + record_wrong[0] + '回';
            lastRecord_accuracy.innerText = '正誤率：' + record_accuracy[0].toFixed(1) + '%';
            lastRecord_SKPM.innerText = 'SKPM：' + record_SKPM[0];

            record_correct.shift();
            record_wrong.shift();
            record_accuracy.shift();
            record_SKPM.shift();

        }
    }, 1000);
};
const judge = () => {
    if(romanBuffer == expectedValue[0] && first) {
        if(expectedValue[0] === expectedValue2[0] && expectedValue2[0] === expectedValue3[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            expectedValue3 = expectedValue3.slice(1);

        } else if(expectedValue[0] === expectedValue3[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue3 = expectedValue3.slice(1);
            second = false;

        } else if(expectedValue[0] === expectedValue2[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            third = false;
             
        }else {
            expectedValue = expectedValue.slice(1);
            second = false;
            third = false;

        }
        
        correctCal();
        romanBuffer = '';
        if(correctSpell.textContent) correctSpell.innerText = '';
        if(!off) {
            ringCorrectSE();

        }

    } else if(romanBuffer === expectedValue2[0] && second) {
        if(expectedValue[0] === expectedValue2[0] && expectedValue2[0] === expectedValue3[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            expectedValue3 = expectedValue3.slice(1);

        } else if(expectedValue2[0] === expectedValue[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            third = false;

        } else if(expectedValue2[0] === expectedValue3[0]) {
            expectedValue2 = expectedValue2.slice(1);
            expectedValue3 = expectedValue3.slice(1);
            first = false;

        }else {
            expectedValue2 = expectedValue2.slice(1);
            first = false;
            third = false;

        }
        correctCal();
        romanBuffer = '';
        if(correctSpell.textContent) correctSpell.innerText = '';
        if(!off) {
            ringCorrectSE();

        }

    } else if(romanBuffer === expectedValue3[0] && third) {
        if(expectedValue[0] === expectedValue2[0] && expectedValue2[0] === expectedValue3[0]) {
            expectedValue = expectedValue.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            expectedValue3 = expectedValue3.slice(1);

        } else if(expectedValue3[0] === expectedValue2[0]) {
            expectedValue3 = expectedValue3.slice(1);
            expectedValue2 = expectedValue2.slice(1);
            first = false;

        } else if(expectedValue3[0] === expectedValue[0]) {
            expectedValue3 = expectedValue3.slice(1);
            expectedValue = expectedValue.slice(1);
            second = false;

        }else {
            expectedValue3 = expectedValue3.slice(1);
            first = false;
            second = false;

        }
        correctCal();
        romanBuffer = '';
        if(correctSpell.textContent) correctSpell.innerText = '';
        if(!off) {
            ringCorrectSE();

        }

    } else {
        wrongCal();
        romanBuffer = '';
        if(first) {
            correctSpell.innerText = expectedValue[0];

        } else if(second) {
            correctSpell.innerText = expectedValue2[0];

        } else if(third) {
            correctSpell.innerText = expectedValue3[0];

        }
        if(!off) {
            SE[1].currentTime = 0;
            SE[1].volume = 0.7;
            SE[1].play();

        }

    }

    if(expectedValue === '' || expectedValue2 === '' || expectedValue3 === '') {
        quesBuffer.shift();
        selectedWord = quesBuffer.join('');

        // 予測をすべてリセット
        expectedValue = '';
        expectedValue2 = '';
        expectedValue3 = '';

        first = true;
        second = true;
        third = true;

        judgeCons();

        if(quesBuffer.length === 0) {
            typeBuffer = 0;
            correctBuffer = 0;
            totalRoman = '';
            reflectRoman.innerText = '';

            // console.log('--Next-Question--');

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
    correctBuffer2++;
    correct.innerText = String(correctBuffer2);
    correctBuffer++;

    totalRoman += romanBuffer;
   
    culResult = Number(correctBuffer2) / enteredIndex * 100;

    reflectRoman.innerText = totalRoman;
    accuracy.innerText = culResult.toFixed(1);
};
const wrongCal = () => {
    wrongBuffer++;

    wrong.innerText = String(wrongBuffer);
        
    culResult = Number(correctBuffer2) / enteredIndex * 100;

    accuracy.innerText = culResult.toFixed(1);
};
const calSKPM = () => {
    SKPM = ((correctBuffer2 / 5 / (timeRange.value / 60) - wrongBuffer) * 2).toFixed(1);

};
const liveCal = () => {
    requestAnimationFrame(liveCal);

    end_time = performance.now();
    time = (end_time - start_time) / 1000;
    speed = correctBuffer / time;
    max_type_time.push(speed);
    typeSpeed.innerText = String(speed.toFixed(1));

    const max = max_type_time.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
    },max_type_time[0]);

    maxSpeed.innerText = String(max.toFixed(1));

    gauge.style.width = speed * 20 + 'px';
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

        expectedValue = consonant + romanMap[quesBuffer[1]];
        expectedValue2 = consonant + romanMap2[quesBuffer[1]];
        expectedValue3 = consonant + romanMap3[quesBuffer[1]];

        expectedValue4 = consonant + consonant + romanMap[quesBuffer[1]];
        expectedValue5 = consonant + consonant + romanMap2[quesBuffer[1]];
        expectedValue6 = consonant + consonant + romanMap3[quesBuffer[1]];

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
