function getReadableNumbers(n) {
    if (typeof n !== 'number') {
      return "Should be a number";
    }
    let baseNumbers = {
      '01':'one',
      '02':'two',
      '03':'three',
      '04':'four',
      '05':'five',
      '06':'six',
      '07':'seven',
      '08':'eight',
      '09':'nine',
      '10':'ten',
      '11':'eleven',
      '12':'twelve',
      '13':'thirteen',
      '14':'fourteen',
      '15':'fifthteen',
      '16':'sixteen',
      '17':'seventeen',
      '18':'eigtheen',
      '19':'nineteen',
      '20':'twenty',
      '30':'thirty',
      '40':'fourty',
      '50':'fifty',
      '60':'sixty',
      '70':'seventy',
      '80':'eighty',
      '90':'ninety'
    };
    let basis = ['hundred', 'thousand'];
    let resultString = '';
    let arrOfNums = `${n}`.split('').reverse();
    let currentBasis = [];
    for (let i = 2; i < arrOfNums.length; i += 1) {
      currentBasis.push(basis[i % 2]);
    }
  
  
  
    console.log(currentBasis);
  
  }
  
  getReadableNumbers(123);
  