'use strict';

//nemu-bthをクリックした時、＃gnaviにクラス名の[open]がついていなければ追加、すでにあれば削除

const btn = document.querySelector('#menu-btn');
const gnavi = document.querySelector('#gnavi');

btn.addEventListener('click', (e) => {
    gnavi.classList.toggle('open');
    e.currentTarget.classList.toggle('close');
});

//nemu-bthをクリックした時、＃gnaviにクラス名の[close]がついていなければ追加、すでにあれば削除


//上から300以上スクロールしたら#page-topに.open追加300未満ではずす


window.addEventListener('scroll', () => {
    const pageTop = document.querySelector('#page-top')
    if (window.scrollY >= 300) {
        pageTop.classList.add('open');
    } else {
        pageTop.classList.remove('open');
    };
});

//  const getscroll = ()=> {
//     const scrolled = window.screenY;
// if ( window.scrollY >= 300 ){
//     pageTop.classList.add('open');
//  } else {
//     pageTop.classList.remove('open');
//  };
//  };
//  window.addEventListener('scroll', getscroll)

//課題１
//fromの所得
const wahtDay = document.querySelector('#what-day');

//送信イベント
wahtDay.addEventListener('submit', (e) => {
    //初期動作のキャンセル
    e.preventDefault();

    // console.log('送信する');

    //入力内容の所得
    const year = wahtDay.year.value;
    const month = wahtDay.month.value;
    const date = wahtDay.date.value;

    //日時
    const now = new Date(year, month - 1, date);
    const day = now.getDay();
    const A01 = document.querySelector('#A-01');
    const A02 = document.querySelector('#A-02');

    const days = ['日', '月', '火', '水', '木', '金', '土']
    console.log(now);

    A01.textContent = `${year}年${month}月${date}日`
    A02.textContent = `${days[day]}曜日`
});

//課題02　BMI
const wahtBmi = document.querySelector('#what-bmi');

wahtBmi.addEventListener('submit', (e) => {

    e.preventDefault();

    const A03 = document.querySelector('#A-03');
    const A04 = document.querySelector('#A-04');
    const kg = wahtBmi.kg.value;
    const cm = (wahtBmi.cm.value) / 100;

    const bmi = Math.floor((kg / (cm * cm)) * 10) / 10;

    //計算結果からメッセージを作成
    //25以上　肥満気味・18.5～24.9　標準・その他痩せ気味

    let message = '';

    if (bmi >= 25) {
        message = '肥満気味';
    } else if (bmi >= 18.5) {
        message = `標準`;
    } else {
        message = `痩せ気味`;
    };

    //結果表示
    A03.textContent = bmi;
    A04.textContent = message;
});

//課題03
//vanilla JSの場合

// const tabs = document.querySelectorAll('.tab-link');
// const sections = document.querySelectorAll('.tab-sec');

// tabs.forEach((tab)=> {
//     tab.addEventListener('click', (e)=> {
//                 // console.log(tabDate);

//         //一度クラスを外して、クリックしたとこだけつける
//         //すべてのsectionからopenをはずす
//         sections.forEach((sec)=> {
//             sec.classList.remove('open');
//         });

//         //全てのtabからopenおはずす
//         tabs.forEach((tab)=> {
//             tab.classList.remove('open');

//         });

//         //sectionに.openをつける
//         //クリックした場所をeで設定
//         const tabDate = e.target.dataset.tab;
//         document.querySelector(`#${tabDate}`).classList.add('open');

//         e.target.classList.add('open');

//     });
// });

//jQueryの場合
$('.tab-link').on('click', (e) => {
    //openをはずす
    $('.tab-link, .tab-sec').removeClass('open');

    const tabTarget = $(e.target); //クリックした場所
    tabTarget.addClass('open');
    $(`#${tabTarget.data('tab')}`).addClass('open');

});



const swiper = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    spaceBetween: 30, //隙間の余白
    // centeredSlides: true, //親の真ん中中央揃え
    slidesPerView: 5,
    autoplay: {
        delay: 2500,  //再生時間
        disableOnInteraction: false,
    },


});