function Cochu() {
    const NoiDung = document.getElementById("NoiDung");
    const cboCoChu = document.getElementById("cboCoChu");
    NoiDung.style.fontSize = cboCoChu.value;
}

function DoCao() {
    const NoiDung = document.getElementById("NoiDung");
    const cboDoCao = document.getElementById("cboDoCao");
    NoiDung.style.height = cboDoCao.value;
}

function TangDoCao() {
    const NoiDung = document.getElementById("NoiDung");
    let Cao = NoiDung.style.height;
    Cao = Cao.substring(0, Cao.length - 2);
    Cao = parseInt(Cao) + 50;
    NoiDung.style.height = Cao + 'px';
}

function NapTieuDe() {
    const NoiDung = document.getElementById("NoiDung");
    NoiDung.className = "TieuDe";
}
