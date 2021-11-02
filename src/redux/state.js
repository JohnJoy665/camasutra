

let renderAllTree = () => {}

const state = {
    postsData: [
        {id: 1, img: "https://mvclip.ru/content/images/artists/1/238278d873004dccaf85a6d06d8e1726.jpg", textValue: "Это пост один! привет!"},
        {id: 2, img: "https://avatars.mds.yandex.net/get-zen_doc/931568/pub_5c73f3238fd40000b3b2bca5_5c73f588a0219800b21bad95/scale_1200", textValue: "Кто я?"},
        {id: 3, img: "http://www.thegoodlife.ru/uploads/posts/1418033747_03.angelina-jolie-oscars-2014-earrings-800x1006.jpg", textValue: "Красотка"},
        {id: 4, img: "https://avatars.mds.yandex.net/get-zen_doc/251164/pub_5bdf0db863d2ac00ab41ff2a_5bdf0dba6fa35900ab19dfa6/scale_1200", textValue: "Уже старенькая"}
      ],
    newText: ''
}

export const handleAddPost = (item) => {
  state.postsData.push(item)
  state.newText = ''
  renderAllTree(state)
}

export const handleChangePost = (newText) => {
  state.newText = newText
  renderAllTree(state)
}

export const callBack = (nabludatel) => {
  renderAllTree = nabludatel
}

export default state;