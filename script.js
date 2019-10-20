let fullname = "";
let nickname = "";
let birthday = "";
let emil = "";
let phonenumber = "";
let university = "";
let faculty = "";
let bachelor = "";

let elementSkillList = [];
let skillList = [];
setTimeout(() => {
  setValueFromLabel();
  elementSkillList = document
    .getElementById("skillList")
    .getElementsByTagName("li");
  skillList = [];
  for (let key of elementSkillList) {
    skillList.push(key.outerText);
  }
}, 10);

const getSkillList = () => {
  skillList = [];
  elementSkillList = document
    .getElementById("skillList")
    .getElementsByTagName("li");
  for (let key of elementSkillList) {
    skillList.push(key.outerText);
  }
};

let txt = "<ul>";
const chainList = () => {
  txt = "<ul>";
  skillList.forEach(element => chain(element));
  txt += "</ul>";
  document.getElementById("skillList").innerHTML = txt;
};

let canEdit = false;
const chain = value => {
  if (canEdit) {
    txt =
      txt +
      "<li onclick='deleteSkill(this);'>" +
      value +
      "<i class='fa fa-trash-o icon' aria-hidden='true'></i></li>";
  } else {
    txt = txt + "<li>" + value + "</li>";
  }
};

const deleteSkill = node => {
  var childs = node.parentNode.childNodes;
  for (i = 0; i < childs.length; i++) {
    if (node == childs[i]) break;
  }
  skillList.splice(i , 1);
  chainList();
};

const clickEditButton = () => {
  canEdit = true;
  setCardEditButton();
  chainList();
  editDetail();
  setInputFromValue();
  showButtonAddSkill();
};

const clickSave = () => {
  canEdit = false;
  setCardEditButton();
  chainList();
  setValueFromInput();
  notEditDetail();
  setLabelFromValue();
  hiddenButtonAddSkill();
};

let button2 = "";
let button1 = "";
const setCardEditButton = () => {
  if (canEdit) {
    button1 = `<button id='saveButton' onclick='clickSave();'>Save <i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>`;
    button2 = `<button hidden= id='editButton' onclick='clickEditButton();'>Edit <i class="fa fa-pencil" aria-hidden="true"></i></button>`;
  } else {
    button1 = `<button hidden id='saveButton' onclick='clickSave();'>Save <i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>`;
    button2 = `<button id='editButton' onclick='clickEditButton();'>Edit <i class="fa fa-pencil" aria-hidden="true"></i></button>`;
  }

  document.getElementById("cardEditButton").innerHTML = button1 + button2;
};

const hoverCard = () => {
  let head1 = '<h2 id="personal" class="text-title">Personal Information</h2>';
  let head2 =
    '<h2 id="education" class="text-title">Education and Working Experience</h2>';
  let head3 = '<h2 id="skills" class="text-title">Skills</h2>';
  document.getElementById("personal").innerHTML = head1;
  document.getElementById("education").innerHTML = head2;
  document.getElementById("skills").innerHTML = head3;
};

const editDetail = () => {
  document.getElementById(
    "fullnameSP"
  ).innerHTML = `<label>FullName : </label><label id="fullname" hidden>Mr. Akkarapong Khamtanet</label><input size="60" id="fullnameIP" type="text" />`;
  document.getElementById(
    "nicknameSP"
  ).innerHTML = `<label>NickName : </label><label id="nickname" hidden>George</label><input size="60" id="nicknameIP" type="text" />`;

  document.getElementById(
    "birthdaySP"
  ).innerHTML = `<label>Birthday : </label><label id="birthday" hidden>XX February 1996</label><input size="60" id="birthdayIP" type="text" />`;
  document.getElementById(
    "emilSP"
  ).innerHTML = `<label>E-Mail : </label><label id="emil" hidden>akkarapong.kh@gmail.com</label><input size="60" id="emilIP" type="text" />`;

  document.getElementById(
    "phonenumberSP"
  ).innerHTML = `<label>PhoneNumber : </label><label id="phonenumber" hidden>099-XXX-XXXX</label><input size="60" id="phonenumberIP" type="text" />`;
  document.getElementById(
    "universitySP"
  ).innerHTML = `<label>University : </label><label id="university" hidden>Suranaree University of Technology</label><input size="60" id="universityIP" type="text" />`;

  document.getElementById(
    "facultySP"
  ).innerHTML = `<label>Faculty : </label><label id="faculty" hidden>Engineering</label><input size="60" id="facultyIP" type="text" />`;
  document.getElementById(
    "bachelorSP"
  ).innerHTML = `<label>Bachelor : </label><label id="bachelor" hidden>Computer Engineering</label><input size="60" id="bachelorIP" type="text" />`;
};

const notEditDetail = () => {
  document.getElementById(
    "fullnameSP"
  ).innerHTML = `<label>FullName : </label><label id="fullname">Mr. Akkarapong Khamtanet</label><input size="60" id="fullnameIP" type="text" hidden />`;
  document.getElementById(
    "nicknameSP"
  ).innerHTML = `<label>NickName : </label><label id="nickname">George</label><input size="60" id="nicknameIP" type="text" hidden />`;

  document.getElementById(
    "birthdaySP"
  ).innerHTML = `<label>Birthday : </label><label id="birthday">XX February 1996</label><input size="60" id="birthdayIP" type="text" hidden />`;
  document.getElementById(
    "emilSP"
  ).innerHTML = `<label>E-Mail : </label><label id="emil">akkarapong.kh@gmail.com</label><input size="60" id="emilIP" type="text" hidden />`;

  document.getElementById(
    "phonenumberSP"
  ).innerHTML = `<label>PhoneNumber : </label><label id="phonenumber">099-XXX-XXXX</label><input size="60" id="phonenumberIP" type="text" hidden />`;
  document.getElementById(
    "universitySP"
  ).innerHTML = `<label>University : </label><label id="university">Suranaree University of Technology</label><input size="60" id="universityIP" type="text" hidden />`;

  document.getElementById(
    "facultySP"
  ).innerHTML = `<label>Faculty : </label><label id="faculty">Engineering</label><input size="60" id="facultyIP" type="text" hidden />`;
  document.getElementById(
    "bachelorSP"
  ).innerHTML = `<label>Bachelor : </label><label id="bachelor">Computer Engineering</label><input size="60" id="bachelorIP" type="text" hidden />`;
};

const setValueFromLabel = () => {
  fullname = document.getElementById("fullname").innerHTML;
  nickname = document.getElementById("nickname").innerHTML;
  birthday = document.getElementById("birthday").innerHTML;
  emil = document.getElementById("emil").innerHTML;

  phonenumber = document.getElementById("phonenumber").innerHTML;
  university = document.getElementById("university").innerHTML;
  faculty = document.getElementById("faculty").innerHTML;
  bachelor = document.getElementById("bachelor").innerHTML;
};

const setValueFromInput = () => {
  fullname = document.getElementById("fullnameIP").value;
  nickname = document.getElementById("nicknameIP").value;
  birthday = document.getElementById("birthdayIP").value;
  emil = document.getElementById("emilIP").value;

  phonenumber = document.getElementById("phonenumberIP").value;
  university = document.getElementById("universityIP").value;
  faculty = document.getElementById("facultyIP").value;
  bachelor = document.getElementById("bachelorIP").value;
};

const setLabelFromValue = () => {
  document.getElementById(
    "fullname"
  ).innerHTML = `<label id="fullname">${fullname}</label>`;
  document.getElementById(
    "nickname"
  ).innerHTML = `<label id="nickname">${nickname}</label>`;
  document.getElementById(
    "birthday"
  ).innerHTML = `<label id="birthday">${birthday}</label>`;
  document.getElementById(
    "emil"
  ).innerHTML = `<label id="emil">${emil}</label>`;

  document.getElementById(
    "phonenumber"
  ).innerHTML = `<label id="phonenumber">${phonenumber}</label>`;
  document.getElementById(
    "university"
  ).innerHTML = `<label id="university">${university}</label>`;
  document.getElementById(
    "faculty"
  ).innerHTML = `<label id="faculty">${faculty}</label>`;
  document.getElementById(
    "bachelor"
  ).innerHTML = `<label id="bachelor">${bachelor}</label>`;
};

const setInputFromValue = () => {
  document.getElementById("fullnameIP").value = fullname;
  document.getElementById("nicknameIP").value = `${nickname}`;
  document.getElementById("birthdayIP").value = `${birthday}`;
  document.getElementById("emilIP").value = `${emil}`;

  document.getElementById("phonenumberIP").value = `${phonenumber}`;
  document.getElementById("universityIP").value = `${university}`;
  document.getElementById("facultyIP").value = `${faculty}`;
  document.getElementById("bachelorIP").value = `${bachelor}`;
};

const addSkill = () => {
    skillList.push(document.getElementById("newSkill").value)
    chainList()
}

const showButtonAddSkill = () => {
    document.getElementById("addSkill").removeAttribute("hidden");
}

const hiddenButtonAddSkill = () => {
    document.getElementById("addSkill").setAttribute("hidden", true);
}