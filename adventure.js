const prompt = require('prompt-sync')();
const welcome = prompt('Do you want to play a game?');

if(welcome.toLowerCase() === 'yes'){
console.log("One dark morning in the middle of the night is where our story starts.  You, hear a noise that wakes you from a deep sleep.")
const investigate = prompt("Should you investigate?")
    if(investigate.toLowerCase() === 'yes'){
        console.log("You decide to investigate the noise and open your bedroom door to a dark hallway")
        const light = prompt("Do you turn on the light?")
        if(light.toLowerCase() === 'yes'){
            console.log("You turn on the light and and your cat, Kevin, runs past you and into the bathroom, covered in blood.")
            const hallway = prompt("Do you proceed down the hallway?")
            if(hallway.toLowerCase() === 'yes'){
                console.log("You hear a loud bang from the kitchen and foot steps coming toward you. You live alone.")
                const flee = prompt("Do you run?")
                if(flee.toLowerCase() === 'yes'){
                    console.log('You start running towards the back door, when you remember Kevin.')
                    const kevin = prompt('Do you go back for Kevin?')
                    if(kevin.toLowerCase() === 'yes'){
                        console.log("Kevin knew you would never leave him, after all he is your only friend.  You dart into the bathroom scoop up Kevin, who you now realize is covered in ketchup and not blood.")
                        const rethink = prompt('Wait ketchup is way less scary, should you: A. Run, B. Stand your ground, or C. Check out what made the noise in the kithen?')
                        if(rethink.toLowerCase() === 'a'){
                            console.log('You leave the bathroom and continue down the hallway towards the back door.  You hear footsteps getting closer and you pick up the pace. Just as you get to the door someone grabs the back of your collar.')
                            const scream = prompt('Do you scream?')
                            if(scream.toLowerCase() === 'yes'){
                                console.log("When you scream it scares the person and he lets go for just a moment. Enough time for you to run out the door, Kevin in your arms. You escaped! You and Kevin live to see another day!")
                            } 
                            else if(scream.toLowerCase() === 'no'){
                                console.log("Game Over.")
                            }
                        }
                        else if(rethink.toLowerCase() === 'b'){
                                console.log("You have decided to stand your ground, you start to clean Kevin off and then you hear another bang from the Kitchen.")
                                const bang = prompt("Do you check out the bang in the kitchen?")
                                if(bang.toLowerCase() === 'yes'){
                                    console.log("You enter the kithcen and see that its just family of racooons that has broken in. You offer them some tea and you become great friends!")
                                }
                                else if(bang.toLowerCase() === 'no'){
                                    console.log("You decide to not check out the noise, you make your way to the backdoor and escape into the night.")
                                }
                        }
                        else if(rethink.toLowerCase() === 'c'){
                                console.log("You decide to check out the noise in the kitchen, Kevin comes with you.  When you arrive you see food and condiments all over the place. At the center, a family of Racoons.")
                                const racoons = prompt("Do you: A. try to defend your home or B. call animal control and back away slowly?")
                                if(racoons.toLowerCase() === 'A'){
                                    console.log("You set down Kevin and grab the katana you have next to your door, sadly it was just a replica and as soon as you make noise the racoons attak. Game over.")
                                }
                                else if(racoons.toLowerCase() === 'b'){
                                    console.log("You slowly back away, they have not seen you yet. You make it to your bedroom, with Kevin of course and call animal control. They arrive and you make it out unharmed!")
                                }
                        }
                    }
                    else if(kevin.toLowerCase() === 'no'){
                        console.log('You have seen a lot of horror movies, you know how it goes. The slowest one dies. That will not be you, duces Kevin.')

                    }
                } 
                else if (flee.toLowerCase() === 'no'){
                    console.log("You know that this could not possibly be anything scary, that only happens in movies. You turn around and are face to face with a man you do not know.")
                    const man = prompt("You did take that one self defence class 10 years ago. Do you attack?")
                    if(man.toLowerCase() === 'yes'){
                        console.log("That one class paid off, you take him down in one move and knock him out. You win!")
                    }
                    else if(man.toLowerCase() === 'no')
                        console.log('You decide to not test your luck fighting, you turn to make a run for the door. The man is too close, Game over.')
            }
                        
            }
            else if (hallway.toLowerCase() === 'no'){
                console.log("You go to the bathroom to check on Kevin. As you close the bathroom door you hear a bang come from the kitchen and foot steps coming towards your room. You live alone.")
                const window = prompt("Your only exit is a window, do you escape?")
                if(window.toLowerCase() === 'yes'){
                    console.log("You try to open the window and its painted shut.")
                    const backdoor = prompt("Do you try to make it to the back door?")
                    if (backdoor.toLowerCase() === 'yes'){
                        console.log("You run down the hall towards the door, but Kevin wont stop crying, so the intruder hears you!  He runs down the hall and you are caught. Game over.")
                    }
                    else if (backdoor.toLowerCase() === 'no'){
                        console.log("You decide to stay in the bathroom, the intruder hears Kevin meow and you hear foot steps")
                        const steps = prompt("Do you run now?")
                        if (steps.toLowerCase() === 'yes'){
                            console.log("You make a run for the back door and escape, yay! you survived!")
                        }
                        else if(steps.toLowerCase() === 'no'){
                            console.log("You stay put and the intruder finds you. Game over.")
                        }
                    }
                }
                else if(window.toLowerCase() === 'no'){
                    console.log("You open the window and grab Kevin. You climb out the window and escape! YAY!")
                }

            }
        }
        else if(light.toLowerCase() === 'no'){
            console.log("As you proceed down the hallway, you feel your cat, Kevin, brush past your leg and you think he goes into your bedroom. You hear a loud noise coming from the kitchen.")
            const kitchen = prompt("Do you enter the kithcen?") 
            if(kitchen.toLowerCase() === 'yes'){
                console.log("You enter the dark kitchen and see a figure in the glow of the fridge light. He turns around. Do you run?")
                if(fridge.toLowerCase() === 'yes'){
                    console.log("You run down the hallway and out the back door. You made it out. Safe and sound. May the odds be in Kevins favor.")
                }
                else if(fridge.toLowerCase() === 'no'){
                    console.log("You yell in your most stern voice 'who are you??' The man answers, 'It's me, Austin, why are you yelling?' Oh yeah you forgot your brother was in town visiting oops!")
                }
            }
            else if (kitchen.toLowerCase() === 'no'){
                console.log("You decide entering the kitchen is too risky, you sneak back to your room and hide under you bed until morning.  Kevin cuddles you all night. You do not hear any more noises. You survived.")
            }

        }

    }
    else if(investigate.toLowerCase() === 'no'){
        console.log("You decide to think nothing of it and return to sleep.  A few moments later there is a knock on your bedroom door. You live alone.")
        const knock = prompt("Do you hide?")
            if(knock.toLowerCase() === 'yes'){
                console.log("You quickly slide off your bed and under it. The door opens, from under the bed you can see two feet in the doorway. The person walks in and walks out, leaving the door open.")
                const bed = prompt('Do you try to escape?')
                if(bed.toLowerCase() === 'yes'){
                    console.log('You quietly get out from your hiding place and start towards the open bedroom door. You can hear a noise in the kitchen and you hear Kevin, your cat, cry out from the living room, which is right next to the kitchen.')
                    const kevin2 = prompt('Do you try to rescue Kevin?')
                    if(kevin2.toLowerCase() === 'yes'){
                        console.log("Of course you would never leave Kevin, he is your only friend after all. You sneak past the kitchen all to step on a squeaky cat toy. Kevin runs into your arms, but now you have been heard.")
                        const escape = prompt('You are next to the front door, do you run?') 
                        if(escape.toLowerCase() === 'yes'){
                            console.log("You open the front door, Kevin safely in your arms. You don't look back as you run the 2 blocks to the only place you know is open at 2am. Ah 7.11 you are safe. You win!")
                        }
                        else if(escape.toLowerCase() === 'no'){
                            console.log("You are frozen by fear, clutching Kevin in your arms. The intruder closes their distance. Game Over.")
                        }
                    }
                    else if(kevin2.toLowerCase() === 'no'){
                        console.log("You decided, everyman for themselves. Who cars about about the cat.  You escape out the back door and are free!")
                    
                    }
                } 
                else if(bed.toLowerCase() === 'no'){
                    console.log("You stay under your bed, but Kevin, your cat, leads the intruder right to you. You can't blame Kevin, he loves you. But sadly you have nowhere to hide. Game over.")
                    
                }
            }
            else if(knock.toLowerCase() === 'no'){
                console.log("You stay in your bed, hoping it is your cat, Kevin, just playing with some toys against the door. But then the doorknob starts to turn. Don't get me wrong, Kevin is a great cat, but he has yet to master turning doorknobs.")
                const doorknob = prompt('Do you try to bail out of the window?')
                if(doorknob.toLowerCase() === 'yes'){
                    console.log("Good thing you had left your window unlocked, and you live in a 1 story house, you open the window swiftly and escape! Yay, you win! Poor Kevin tho, he was never seen agian.")

                }
                else if(doorknob.toLowerCase() === 'no'){
                    console.log("The intruder enters, it was not Kevin. Game over.")
                }
            
            }
    }
} 
else if(welcome.toLowerCase() === 'no'){
    console.log("Goodbye.")
}        


    


  