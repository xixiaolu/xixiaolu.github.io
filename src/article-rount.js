import nanquan1 from './article/南拳1.html';
import nanquan2 from './article/南拳2.html';
import nanquan3 from './article/南拳3.html';
import nanquan4 from './article/南拳4.html';
import nanquan5 from './article/南拳5.html';
import zhouji1 from './article/周记1.html';
function HTMLarticle(str) {
    var span = document.createElement('span');
    span.innerHTML = str;
    return span.querySelector('template').innerHTML;
}
export default[
    {
        id: 1,
        article: HTMLarticle(nanquan1),
    },
    {
        id: 2,
        article: HTMLarticle(nanquan2),
    },
    {
        id: 3,
        article: HTMLarticle(nanquan3),
    },
    {
        id: 4,
        article: HTMLarticle(nanquan4),
    },
    {
        id: 5,
        article: HTMLarticle(nanquan5),
    },
    {
        id: 6,
        article: HTMLarticle(zhouji1),
    },
    {
        id: 7,
        article: HTMLarticle(zhouji1),
    },
    {
        id: 7,
        article: HTMLarticle(zhouji1),
    },
    {
        id: 8,
        article: HTMLarticle(zhouji1),
    },
    {
        id: 9,
        article: HTMLarticle(zhouji1),
    },
]