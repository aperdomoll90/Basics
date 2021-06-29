const findDups = (arr) => {
    const dups =[]
    const compare =[]
    for(let num of arr ){
      if(!compare.includes(num)){
        compare.push(num)
      }else{
        dups.push(num)
      }
    }
    return compare
  }
  const arr = [4,3,2,1,4,5,6,7,7,8]
  console.log(findDups(arr))

  const domainPart = domainArr.map(domain => { 
    const parts = domain.split('/')
    return parts[2]
  })