// VARIABLES SETUP
let isShowingLangSelector = false;
const adminList = {
	
}
// VARIABLES[READ-ONLY] SETUP
// FUNCTION SETUP
function langSelectForm() {
	if(isShowingLangSelector === false) {
		document.querySelector('.app__langSelector').style.display = 'block';
		isShowingLangSelector = true;
	} else {
		document.querySelector('.app__langSelector').style.display = 'none';
		isShowingLangSelector = false;
	}
}
/* function hideLoading() {
	document.querySelector('.loading').style.display = 'none';
}
*/
function adminSubmitUser() {
	const user = document.querySelector(".userInput").value;
	const pwd = document.querySelector(".passwordInput").value;
	if(user === "jsadmin0368" && pwd === "euneosongesdje225623!") {
		alert("안녕하세요. 지서원 님. 확인을 누르시면 관리자 모드로 이동합니다.");
		window.location.href = "./adminRedirection.html";
	} else {
		alert("아이디 또는 비번이 잘못되었습니다.");
	}
}
if(window.location.href === 'file:///media/fuse/drivefs-b2ec1dc9c894fa62cd6056b42e69b868/root/%EC%9E%91%EC%97%85/sites/online%20class/admin/bin/adminRedirection.html') {
	document.getElementsById('redirect').innerHTML = '곧 관리자 화면으로 리디렉션됩니다...' + Math.random(27, 45) + '%';
}