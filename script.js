let div = document.createElement('div');
div.className = 'wrapper';
document.body.append(div);
let container = document.querySelector('.wrapper');
let textarea = document.createElement('textarea');
container.append(textarea)
let divKeyboard = document.createElement('div');
divKeyboard.setAttribute("id", "keyboard");

container.append(divKeyboard)
let keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace", "Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 'Del', "Caps Lock", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 'Shift', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 'arrowTop', 'Shift', "Ctrl", 'Win', 'Alt', 32, 'Alt', 'arrowLeft', "arrowBottom", "arrowRight", "Ctrl"]
let keyb = [];
document.onkeypress = function (event) {
    keyb.push(event.keyCode);
    console.log(keyb)
}
function init() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
        switch (keyboard[i]) {
            case "Backspace":
                out += "<div class='k-key key_backspace key_spec' data='" + keyboard[i] + "'> <p>" + "Backspace" + "</p></div>";
                continue
            case "Tab":
                out += "<div class='k-key key_tab key_spec' data='" + keyboard[i] + "'> <p>" + "Tab" + "</p></div>";
                continue
            case 'Del':
                out += "<div class='k-key key_del key_spec' data='" + keyboard[i] + "'> <p>" + 'Del' + "</p></div>";
                continue
            case "Caps Lock":
                out += "<div class='k-key key_caps key_spec' data='" + keyboard[i] + "'> <p>" + "Caps Lock" + "</p></div>";
                continue
            case 13:
                out += "<div class='k-key key_enter key_spec' data='" + keyboard[i] + "'> <p>" + "Enter" + "</p></div>";
                continue;
            case 'Shift':
                out += "<div class='k-key key_shift key_spec' data='" + keyboard[i] + "'> <p>" + 'Shift' + "</p></div>";
                continue;
            case 'arrowTop':
                out += "<div class='k-key key_arrowTop key_spec' data='" + keyboard[i] + "'> <p>" + '&#9650;' + "</p></div>";
                continue
            case "Ctrl":
                out += "<div class='k-key key_ctrl key_spec' data='" + keyboard[i] + "'> <p>" + "Ctrl" + "</p></div>";
                continue
            case 'Win':
                out += "<div class='k-key key_win key_spec' data='" + keyboard[i] + "'> <p>" + 'Win' + "</p></div>";
                continue
            case 'Alt':
                out += "<div class='k-key key_alt key_spec' data='" + keyboard[i] + "'> <p>" + 'Alt' + "</p></div>";
                continue;
            case 'arrowLeft':
                out += "<div class='k-key key_arrowLeft key_spec' data='" + keyboard[i] + "'> <p>" + '&#9668;' + "</p></div>";
                continue
            case "arrowBottom":
                out += "<div class='k-key key_arrowBottom key_spec' data='" + keyboard[i] + "'> <p>" + "&#9660;" + "</p></div>";
                continue
            case "arrowRight":
                out += "<div class='k-key key_arrowRight key_spec' data='" + keyboard[i] + "'> <p>" + "&#9658;" + "</p></div>";
                continue
            case 32:
                out += "<div class='k-key key_space' data='" + keyboard[i] + "'> <p>" + String.fromCharCode(keyboard[i]) + "</p></div>";
                continue;
            default:
                out += "<div class='k-key' data='" + keyboard[i] + "'> <p>" + String.fromCharCode(keyboard[i]) + "</p></div>";
                continue
        }
    }
    document.getElementById('keyboard').innerHTML = out;
}
init();
document.querySelectorAll(".k-key").forEach(function (element) {
    document.onkeypress = function (event) {
        setFocus()        
        document.querySelectorAll(".k-key").forEach(function (element) {
            element.classList.remove("activ")
        });
        let keyData = document.querySelector("#keyboard .k-key[data='" + event.keyCode + "']")
        keyData.classList.add("activ");
        setTimeout(function () {keyData.classList.remove("activ"); }, 100);
    }    
})
document.querySelectorAll(".k-key").forEach(function (element) {
    element.onclick = function (event) {
        setFocus()
        const textarea = document.querySelector('textarea')
        const keys = document.querySelectorAll(".k-key")
        keys.forEach(function (element) {
            element.classList.remove("activ");
        });
        this.classList.add('activ')
        setTimeout(function () { element.classList.remove("activ"); }, 100);
        switch (this.outerText) {
            case "Enter":
                textarea.value += '\n'
                break;
            case "Space":
            case "Backspace":
                textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd)
                break;
            case "Tab":
                textarea.value += "   ";
                break;
            case 'Del':
                textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1)
                break;
            case "Caps Lock":
            case 'Shift':
            case 'arrowTop':
            case "Ctrl":
            case 'Win':
            case 'Alt':
            case "arrowLeft":
            case "arrowBottom":
            case "arrowRight":
            case "":
                textarea.value += " ";
                break;
            default:
                textarea.value += this.outerText;
        }
    }
});
function setFocus() {
    document.querySelector("textarea").focus();
}
setFocus()