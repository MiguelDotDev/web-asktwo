document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnClsLeft').addEventListener('click', () => {
        if (document.getElementById('leftCont').classList.contains('Cerrado')){
            document.getElementById('leftCont').classList.remove('Cerrado');
            document.getElementById('menuCental').classList.remove('menuLeftRemoved');
        } else {
            document.getElementById('leftCont').classList.add('Cerrado');
            document.getElementById('menuCental').classList.add('menuLeftRemoved');
        }
    });

    document.getElementById('btnClsRight').addEventListener('click', () => {
        if (document.getElementById('rightCont').classList.contains('Cerrado')){
            document.getElementById('rightCont').classList.remove('Cerrado');
            document.getElementById('menuCental').classList.remove('menuRightRemoved');
        } else {
            document.getElementById('rightCont').classList.add('Cerrado');
            document.getElementById('menuCental').classList.add('menuRightRemoved');
        }
    });
});