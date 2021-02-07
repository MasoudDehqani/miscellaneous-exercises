const data = [
    {name:'alireza',likeCount:12,postCount:1},
    {name:'hamidreza',likeCount:2,postCount:2},
    {name:'mohamadreza',likeCount:120,postCount:10},
    {name:'gholamreza',likeCount:1,postCount:34},
  ];
  
  const styles = {
    rootContainerStyle: `
      display: flex;
      flex-direction: column;
      align-items: center`,
  
    itemsContainerStyle: `
      display:flex; 
      justify-content: space-between;
      border: 3px solid black;
      width: 40%;
      border-radius: 6px;
      padding: 12px 45px;
      margin-bottom: 15px`,
  
    nameItemStyle: `
      width: 90px;
      text-align: left`,
  
    likeItemStyle: `
      color: red;
      margin: auto;
      width: 50px;
      text-align: right`,
  
    postItemStyle: `
      color: green;
      width: 40px;
      text-align: right` 
  }
  
  const rootDiv = document.querySelector("#root")
  rootDiv.style = styles.rootContainerStyle
  
  data.forEach((element) => {
    const itemsContainer = document.createElement('div')
    itemsContainer.style = styles.itemsContainerStyle
    rootDiv.appendChild(itemsContainer)
  
    const nameItem = document.createElement('span')
    nameItem.textContent = element.name
    nameItem.style = styles.nameItemStyle
    itemsContainer.appendChild(nameItem)
  
    const likeItem = document.createElement('span')
    likeItem.textContent = element.likeCount + ' ❤'
    likeItem.style = styles.likeItemStyle
    itemsContainer.appendChild(likeItem)
  
    const commentItem = document.createElement('span')
    commentItem.textContent = element.postCount + " 🗨"
    commentItem.style = styles.postItemStyle
    itemsContainer.appendChild(commentItem)
  })