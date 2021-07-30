//сортировать надо
//"адрес" и "среда" они оба сортируются в "а д е р с" и тд.

function getAnagrams(input) {
  let obj = {};
  let result = [];
  input.split(" ").forEach(el => {
    let sortedEl = el.split('').sort().join('');
    if(obj[sortedEl]){
      obj[sortedEl].push(el);
    }else{
      obj[sortedEl] = [el];
    }
  });
  for(let key of Object.keys(obj)){
    if(obj[key].length <= 1){
      delete obj[key];

    }
  }

  return Object.values(obj);
}

export default getAnagrams;
