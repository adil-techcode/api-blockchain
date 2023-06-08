const  ethers = require('ethers');
const contractAddress = "0x9307D57c7f42Ed40687480F05A8Dea8EAbf89822";
const API = "https://sepolia.infura.io/v3/3819dfb4fb2b41a786ed3365543fb02d";
const privateKey = "59b7e688d2e5f8f11f01c0b85062e944dcc6f5c1fd479e111ab153a527e646f0";
const ABI = require("../BlockchainABIs/Token.json") 


let customProvider = new ethers.providers.JsonRpcProvider(API);
let wallet = new ethers.Wallet(privateKey, customProvider);
let contractSign = new ethers.Contract(contractAddress,ABI,wallet);

exports.mintoken = async (req,res,next) => {
    const tx = await contractSign.safeMint('0x5f5f4A35A3d1aefA3E0f9d5F703496f51686C297','hash');
     console.log(tx)
     res.send({
        message: "Mint Successfull",
        hash: tx.hash
     })   
     console.log("tokenMinted")    
} 


exports.transfertoken = async (req,res,next) =>{
    try{
        const tx =  await contractSign.safeTransferFrom('0x5f5f4A35A3d1aefA3E0f9d5F703496f51686C297','0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',3)
        console.log(tx)
        res.send({
            message: " Transfer Successfull",
            hash: tx.hash
         }) 
         console.log("Transfer Successful") 
    }

  catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Transfer failed ', errors: error.error.reason});
  }
         
}


exports.balanceOf = async(req,res,next) =>{
try{
    const  balance  = await contractSign.balanceOf("0x5B38Da6a701c568545dCfcB03FcB875f56beddC0");
    console.log(balance)
    res.send({
        message: "Balance Fetch successful",
          Userbalance: balance.toString()
     }) 
     console.log("Transfer Successful") 
}

catch (error) {
    res.status(500).json({ success: false, message: 'failed ', errors: error.code
});
  }
}








exports.name = async(req,res,next) =>{
    try{
        const  contractname  = await contractSign.name();
        console.log(contractname)
        res.send({
            message: "  Name Fetch successful",
              Userbalance: contractname
         }) 
         console.log("Name Successful") 
    }
    
    catch (error) {
        res.status(500).json({ success: false, message: 'failed ', errors: error
    });
      }
    }













