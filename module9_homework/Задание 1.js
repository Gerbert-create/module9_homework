const parser = new DOMParser()

const XmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
const XML_DOM = parser.parseFromString(XmlString, "text/xml")

const ListNode = XML_DOM.querySelector("list")
const studentNode_1 = ListNode.querySelector("student")
const firstStudent_name = studentNode_1.querySelector("name")
const firstStudent_firstName = firstStudent_name.querySelector("first")
const firstStudent_secName = firstStudent_name.querySelector("second")
const firstStudent_age = studentNode_1.querySelector("age")
const firstStudent_prof = studentNode_1.querySelector("prof")
const studentNode_2 = ListNode.lastElementChild
const lastStudent_name = studentNode_2.querySelector("name")
const lastStudent_firstName = lastStudent_name.querySelector("first")
const lastStudent_secName = lastStudent_name.querySelector("second")
const lastStudent_age = studentNode_2.querySelector("age")
const lastStudent_prof = studentNode_2.querySelector("prof")


const firstStud_langAtr = firstStudent_name.getAttribute("lang")
const lastStud_langAtr = lastStudent_name.getAttribute("lang")

let student = [{
  name: firstStudent_firstName.textContent + ' ' + firstStudent_secName.textContent,
  lang: firstStud_langAtr,
  age: Number(firstStudent_age.textContent),
  prof: firstStudent_prof.textContent
},
               
{
  name: lastStudent_firstName.textContent + ' '+ lastStudent_secName.textContent,
  lang:  lastStud_langAtr,
  age:  Number(lastStudent_age.textContent),
  prof:  lastStudent_prof.textContent             
}]


console.log('student', student)