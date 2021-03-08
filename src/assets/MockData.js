const mockData = {
  hashtags: ["love", "instagood", "photooftheday", "beautiful", "fashion", "tbt", "happy", "cute", "followme", "like4like", "follow", "me", "picoftheday", "selfie", "instadaily", "friends", "summer", "girl", "art", "fun", "repost", "smile", "nature", "instalike", "food", "style", "tagsforlikes", "family", "likeforlike", "igers", "fitness", "nofilter", "follow4follow", "instamood", "amazing", "life", "travel", "beauty", "vscocam", "sun", "bestoftheday", "music", "followforfollow", "beach", "instagram", "photo", "sky", "vsco", "dog", "l4l", "sunset", "f4f", "ootd", "pretty", "swag", "makeup", "foodporn", "hair", "cat", "party", "girls", "photography", "cool", "baby", "lol", "tflers", "model", "motivation", "night", "instapic", "funny", "gym", "healthy", "yummy", "hot", "design", "black", "pink", "flowers", "christmas", "blue", "work", "instafood", "fit", "instacool", "iphoneonly", "wedding", "blackandwhite", "workout", "lifestyle", "handmade", "followback", "instafollow", "home", "drawing", "my", "nyc", "webstagram", "sweet", "instalove", "foodie", "foodporn", "foodgasm", "nom", "food", "pizza", "foodporn", "foodstagram", "menwhocook", "sushi", "yummy", "foodcoma", "eathealthy", "instafood", "delicious", "foodpic", "cooking", "snack", "tasty", "cleaneating"],
  comments: ['And so the robots spared humanity ... https://t.co/v7JUJQWfCv', 'Stormy weather in Shortville ...', 'Technology breakthrough: turns out chemtrails are actually a message from time-traveling aliens describing the secret of teleportation', 'Falcon Heavy test flight currently scheduled for late summer', 'Considering trying to bring upper stage back on Falcon Heavy demo flight for full reusability. Odds of success low, but maybe worth a shot.', 'Incredibly proud of the SpaceX team for achieving this milestone in space! Next goal is reflight within 24 hours.', 'Made today on Tesla sketch pad https://t.co/Z8dFP2NN41', 'If you just downloaded V8.1, tap the the T on center screen three times', 'Here is the latest SpaceX travel ad for the flight around the moon &amp; into deep space. Maybe needs a few edits ... https://t.co/mA8ZgutrbE', 'Long Neuralink piece coming out on @waitbutwhy in about a week. Difficult to dedicate the time, but existential risk is too high not to.', 'First drive of a release candidate version of Model 3 https://t.co/zcs6j1YRa4', 'Model 3 was going to be called Model E, for obvious dumb humor reasons, but Ford sued to block it, so now it is S3X. Totally different :)', 'Model 3 is just a smaller, more affordable version of Model S w less range &amp; power &amp; fewer features. Model S has more advanced', 'Am noticing that many people think Model 3 is the "next version" of a Tesla, like iPhone 2 vs 3. This is not true.', 'Where are the #%*&gt; aliens? https://t.co/FDuJIdwgrN', 'Finally, an explanation for daylight savings that makes sense ... https://t.co/kGpJHNgRJO', '.@mcannonbrookes Can only happen with your support, and working closely with key govt and utility leaders who are s\xe2\x80\xa6 https://t.co/', 'Just wanted to write a note of appreciation to the many Australians who came out in support of the battery plan, especially @mcannonbrookes', 'Ironically, direct current is the right approach today, even though alternating was right in the past. Solar power &amp; electronics both DC.', 'Thanks JJ!', 'https://t.co/3YSXZq1EVj', 'Fly me to the moon ... Ok\nhttps://t.co/6QT8m5SHwn', 'SpaceX announcement tomorrow at 1pm PST', 'Roller coasters are awesome', 'Excellent Tesla Model X review https://t.co/wvog4Pbo1o', 'Just posted a video https://t.co/RCV7MVi8rs', 'https://t.co/6Ve3YJoStm', 'Baby came back https://t.co/5FRhw3AT2b', 'All systems go, except the movement trace of an upper stage engine steering hydraulic piston was slightly odd. Standing down to investigate.', 'Counting down to the first SpaceX launch from the Apollo 11 launch pad tomorrow morning (webcast\xe2\x80\xa6 https://t.co/upjTcmftte', 'Provided Dragon 2 demo missions go well, SpaceX is highly confident of being able to fly US astronauts in 2018 https://t.co/usUto6QSi7', 'Looks like we are go for launch. Added an abort trigger at T-60 secs for pressure decay of upper stage helium spin start system.', 'Investigating a (very small) leak in the upper stage. If ok, will launch tomorrow. https://t.co/bQf97lywn4', 'Daylight rocket launch &amp; landing at the Cape this weekend. Will be the 1st SpaceX flight from the Apollo launch pad. https://t.co/Vr5LQjYaPZ', 'Apparently, there is this thing called "Dad jokes" and I make them', 'In appreciation, Tesla is providing all repair costs free of charge and expedited. https://t.co/D68HNJcCoQ', 'Congrats to the Tesla owner who sacrificed damage to his own car to bring a car with an unconscious driver safely to a stop!', 'Falcon 9 rocket now vertical at Cape Canaveral on launch complex 39-A. This is the same launch\xe2\x80\xa6 https://t.co/wY6dWRcer3', 'George Schultz and Jim Baker article in @WSJ regarding a carbon tax https://t.co/tf2Urgms85', 'Production Tesla Model S P100DL sets Motor Trend all-time world record to 60 mph in 2.27 sec https://t.co/sxALQrM5Ls', 'Signing off now. That was more than enough Twitter trouble for one morning!', 'Activists should be pushing for more moderates to advise President, not fewer. How could having only extremists advise him possibly be good?', 'Walking down the street and saw this https://t.co/Mpv5j6088K', 'Rainbows, unicorns and electric cars https://t.co/oGHkVUmpdi', '26 ft diameter tunnel running 2 miles under D.C. https://t.co/XFQkioEsg8', 'In addition, I again raised climate. I believe this is doing good, so will remain on council &amp; keep at it. Doing otherwise would be wrong.', 'Minecraft https://t.co/lU1YzJjLOZ', 'There has already been and there will be progress on this matter', 'Regarding the meeting at the White House: https://t.co/8b1XH4oW6h', 'Top AI researchers agree on principles for developing benefical AI https://t.co/CATbd4oidF', 'Please read immigration order. Lmk specific amendments. Will seek advisory council consensus &amp; present to President. https://t.co/qLpbsP4lEk', 'The blanket entry ban on citizens from certain primarily Muslim countries is not the best way to address the country\xe2\x80\x99s challenges', 'And we start digging the tunnel tonight https://t.co/UYSIU0qg34', 'Hyperloop pod race happening this weekend at SpaceX HQ (near LAX). We built a ~mile long vacuum tube on our campus big enough to fit people.', 'Exciting progress on the tunnel front. Plan to start digging in a month or so.', 'Rex Tillerson supports a carbon tax. This is what is really needed to move the needle. https://t.co/6ne01TOzs1', 'Sigh', 'Tillerson also said that \xe2\x80\x9cthe risk of climate change does exist\xe2\x80\x9d and he believed \xe2\x80\x9caction should be taken"', 'Auto steer limited to 45 mph on highways for now, i.e. heavy traffic, where it is needed most. Limit will raise as we get more data.', 'Autopilot for HW2 rolling out to all HW2 cars today. Please be cautious. Some cars will require adjustment of camera pitch angle by service.', 'Validating a GPU driver fix and camera pitch angle health check for HW2', 'Report highlight: \xe2\x80\x9cThe data show that the Tesla vehicles crash rate dropped by almost 40 percent after Autosteer', 'Final report on Autopilot issued by @NHTSAgov is very positive https://t.co/KsOZSrr3l9', 'Falcon before launch https://t.co/QqxvtBijoF', 'Rewatched "Ghost in the Shell" and the end of "Colossus: The Forbin Project" https://t.co/ZVUR5RzE5C', 'HW2 Autopilot now downloading to all HW2 cars, but in non-actuating mode to assess reliability. If looks good, actuation by end of week.', 'Liftoff https://t.co/pcVJOvFHY2', 'All satellites deployed', 'Mission looks good. Started deploying the 10 Iridium satellites. Rocket is stable on the droneship.', 'Promising early results from the Ludricrous Easter egg. Looks like 0 to 60 mph in 2.34 sec (Motor Trend spec) might be achievable...', 'If all looks good, HW2 Autopilot functionality will switch from shadow to active mode by end of week for cars beyond initial 1000', 'New rev for Autopilot HW2 rolling out Mon to first 1000 &amp; to rest of fleet in shadow mode. Also improves HW1 and enables Ludicrous+.', 'Hold-down firing of @SpaceX Falcon 9 at Vandenberg Air Force completed. All systems are go for launch next week.', 'HW2 Autopilot software uploading to 1000 cars this eve. Will then hold to verify no field issues and upload to rest of fleet next week.', 'Resolving an Autopilot HW2 bug that shows up when booting from a subzero cold-soak. If that fix works, software will start uploading tmrw.', 'Churchill (non) quotes \nhttps://t.co/avA4YD6K6g', 'Deus ex machina on the center screen when it ends', 'Make sure your car is connected to wifi for the update. Will update over its cell connection too, but takes much longer.', 'To activate the Model X holiday performance, just type holidays or ModelXmas after pressing the logo. Also, Mars. https://t.co/8Cy7YPlECX', 'Looks like we might be ready to rollout most of Autopilot functionality for HW2 towards the end of next week', 'Tesla receives highest owner satisfaction score of any carmaker in Consumer Reports survey https://t.co/NpJYkz8MgA', 'Tesla Autopilot vision neural net now working well. Just need to get a lot of road time to validate in a wide range of environments.', 'I am actually going to do this', 'It shall be called "The Boring Company"', 'Traffic is driving me nuts. Am going to build a tunnel boring machine and just start digging...', 'Forming a rocket nozzle https://t.co/QrpcVyHAXr', 'A life well lived https://t.co/NZcRZUDroH', 'Model S smashes into semi truck trailer and lifts it off the ground. Driver walks away. https://t.co/NSuMvcYaA6', 'Longer version of self-driving demo with Paint It Black soundtrack \nhttps://t.co/YuUmyEaCgR', 'Tesla self-driving AI with the Benny Hill option package https://t.co/gJAwzys7vV', 'Vote tally shows ~85% of unaffiliated shareholders in favor of the Tesla/SolarCity merger! Thanks for believing.', 'Model X numbers should also improve by 0.1 sec on 0 to 60 and 1/4 mile', 'Looks like the Model S P100D Easter egg will allow it to do 0 to 60 mph in 2.4 sec and a 10.6 sec 1/4 mile via software update next month', 'Love you too!\nhttps://t.co/BlDDQ0oJmg', 'Playing Amish Paradise in my Tesla', 'Here is how to vote your Tesla and SolarCity shares: https://t.co/7LaBe6kAp6', 'Forgot to mention there will be a P100D Ludicrous Easter egg soon that uncorks the full performance', 'In addition, we reinforced the surrounding body structure for improved safety (was already 5 star in all categories).', 'I highly recommend the new all glass roof on the Model S. This was very hard to develop, but it makes the interior\xe2\x80\xa6 https://t.co/', 'Will be on @CNBC with Ron Baron in about half an hour https://t.co/OOL5yv5ue6', 'Great Model X article by @BBC_TopGear! https://t.co/yXdwyQVkVg', 'Only a matter of time before advanced AI is used to do this. Internet is particularly susceptible to a gradient des\xe2\x80\xa6 https://t.co/']
}
export default mockData;