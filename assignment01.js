const fs = require('fs')
const readline = require('readline')
const yargs = require('yargs')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const fileName = yargs.argv.filename
const txt = 'You are awesome'
console.log(fileName)
if(fileName == undefined){
    rl.question("Enter file name: ", function(name){
        fs.access(name, (err) => {
            if(!err){
                console.log('file exists!')
                rl.close()
            }
            else{
                fs.writeFile(name, txt, function(err){
                    if(!err){
                        console.log('file created!')
                        rl.close()
                    }
                    else{
                        console.log(err)
                        rl.close()
                    }
                })
            }
        })
    })
}
else{
    fs.access(fileName, (err) => {
        if(!err){
            console.log('file exists!')
            rl.close()
        }
        else{
            console.log('file does not exist')
            fs.writeFile(fileName, txt, function(err){
                if(!err){
                    console.log('file created!')
                    rl.close()
                }
                else{
                    console.log(err)
                    rl.close()
                }
            })
        }
    })
}