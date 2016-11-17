Array.prototype.shuffle = function (){
    var i = this.length, j, temp;
    if ( i == 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

var whats = [
      "How could you forget... what’s his name?",
      "When Sammy smiles you melt into a puddle of failed discipline.",
      "Michael is sad because we can’t find his Venom mask. And I won’t electrical-tape the back of his head.",
      "Boys you have two things to be afraid of. One, nothing. Two, spankings.",
      "I do like a hundred of them and that’s in sets of ten so that’s more like... a lot.",
      "I draw the line - just not on my brows!",
      "Don’t throw the Bilibo out with the bathwater. But you could probably throw the bathwater out with the Bilibo.",
      "Rule number one: no throwing snowballs at Mommy. Rule number two: no throwing any snow at all at Mommy. Rule number three: no splashing snow at Mommy. Okay let’s go play!",
      "Sammy, could you be a little more less messy?",
      "Okay guys, why don’t you go play lightsabers for a while. I know you just watched Star Wars so it must be done.",
      "“When you flash that fragile smile.” What does that even mean? Does she have dentures?",
      "No, they speak a different language. Like Spanish, but Rat.",
      "I don’t know who is making that noise but they’d better stop. That does not sound like a homeschool noise.",
      "Michael, it’s very important that I finish this chocolate for your wellbeing.",
      "Sorry, I can’t hear you so just go ahead and do what I said.",
      "You can’t wear yellow in the winter! It's white out there! You look like pee.",
      "But I’m Mommy and he’s just Sam. So my word goes.",
      "I’ve never studied the <em>ocean</em>. That’s why I bought a <em>curriculum</em>.",
      "I want someone to tell me what happened last week and I want that someone to be Sammy.",
      "We need to give these boys an allowance so I can start taking it away.",
      "You guys sounded like a pack of angry seagulls over one french fry.",
      "(Looking at a Monster’s University band-aid) Makes you want to hurt yourself, doesn’t it?",
      "That’s gross. You don’t put the Kraang in Mommy’s water.",
      "You know what I don’t understand? “As the crow flies.” Have you ever seen a crow fly? They fly in circles and all haphazardly.",
      "Boys, if you’re going to be in the house you need to be outside.",
      "So, tribal people, they are kind of… under-dressed.",
      "(After reading Mother Goose) Apparently when I assign poetry to the children it doesn’t have to be good.",
      "What I say sticks. I’m like a sticky pad. The sticky pad of justice. Bam. Right here on your forehead.",
      "Me: You were born at 6:58? At night? Nic: Yes, of course. I would never get up that early.",
      "You know why I like playing Pictionary? It’s because it’s not like we’re competing - we’re all trying to reach the same goal.",
      "Hey this is resealable. *scoff* Who reseals bacon?",
      "Michael, draw a longboat full of men. Give them some heads! That looks like a hairy sea-worm!",
      "Ahh!! It’s not Christmasy in here! Go put your hats on and get quiet!",
      "Ok I want you to shut your brain of - the part of your brain that talks - and do your math.",
      "This is like listening to the Trans-Siberia Orchestra but everyone is out of tune.",
      "Me: I am mother, hear me roar? Nic: I am mother, hear me ground you.",
      "Tim don't swish your chocolate milk. You’re going to get cavities in your tonsils.",
      "(After roasting mini marshmallows over the stove) Okay, I’m done with this tedious snack.",
      "It’s not like I’m one of those girls that need a \"refill\" so you have to blow air in their ear.",
      "I don’t like dogs who eat books. It’s a waste of good literature.",
      "I don’t understand pancakes. Are they cake or bread? Pancakes confuse me…",
      "I speak fluent Nawlins!",
      "What's the cuisine of America? The cheeseburger?",
      "Or you could just have willpower and eat the cheerios!",
      "Me: Yeah and before you know it Harry is having a mid-life crisis. Nic: Yeah, and he shows up on a red broom!",
      "No, I don’t have allergies. I’m just sneezey.",
      "I can already tell that I am going to be such a crabbypants in the heat!",
      "How could they do that?? That’s not funny! Okay, well, it’s <em>kind</em> of funny.",
      "(Looking at a sticky bun) It’s a tiny little piece of bread that smells like cinnamon. It’s diabolical.",
      "It is too coffee. It’s delicious and it’s coffee.",
      "You were bowling? Sammy, don’t bowl with your hotdog.",
      "Andrew stop doing that - I can hear you smiling!",
      "I don’t want to go read it. I bought the book. Put it in the book!",
      "Timothy! You do not pee in the heaters!",
      "They’re all ruiny now.",
      "That’s right. I take care of problems. Now why does it smell like a barn in here?",
      "Yogurt’s an interactive snack. The parents really need to be following along.",
      "Why do you smell like coffee?!?!",
      "I’m more momly.",
      "So, it’s like a loaf of bread. Covered in green and red marachino cherries and filled with dried apples and a bunch of other stuff I don’t recommend.",
      "Me: That onion and chive cream cheese is a little funky. Nic: Armpit? Me: (laughs) What? Nic: (laughs) Well, sometimes the chives can get a little armpitty!!",
      "So, I’m looking at God like He has three heads… well, He does… So I’m looking at God like He has four heads…. haha forheads… so I’m looking at God like He has multiple… well, more heads than He has…",
      "Pout, pout, get it all out - I’ve got some things that will make you shout, come on… I’m talking to you…",
      "Guys, get these balls out of here before someone kills themselves, like me!",
      "Boosh!!",
      "Mourning doves are so hard core. They just zip around. Minimal flapping. No regard for life or wing.",
      "Joe, a moat without water is just a hole around a castle!!",
      "I have a hard enough time coloring between the lines and they expect me to keep a whole car there!!",
      "(After using her sunglasses to hold up her hair) Now I need a pair for my eyes.",
      "Call me the win-over-inator!",
      "I love the burbling sound of coffe being poured. It's music to my decaffeinated ears.",
      "Jack, are you eating just the hotdog? The bun is not a holder for the hotdog.",
      "It's too... not good.",
      "Mikey (with the fridge open): Mommy, what are we doing tomorrow? Nic: I don't know but we won't be cooling the house with the refridgerator.",
      "Yes, anything you want! Now be quiet.",
      "You don't have to tell me twice! Well, I guess you did tell me twice. You don't have to tell me three times!",
      "I love magnets. They're like God's vaccuum.",
      "Alright, I'll be a bumblebee. Bumblebees got <em>back</em> baby!",
      "I like Bob Marley's songs but when he sings them he sounds like such a downer. I mean, you're telling me not to worry and I'm all like \"Man, I'm worried about <em>you</em>!\"",
      "Nic: Jack you need to wear pants. Jack: I did wear pants. Today. Nic: It's an all-day thing, buddy, you can't just wear pants once.",
      "Nic: Maybe our next house can have a Starbucks right next to it. Me: Maybe it could have a Starbucks <em>inside</em> it! Nic: I think that would just make us homeless.",
      "Joe (stretching his eyelid out): Mommy can you do this? Nic: No, Joe when you get to be my age your eyes <em>actually</em> freeze that way.",
      "They need to get off they're tree-hugging high horse. You know, if there was a tree-hugging high horse. They need to get off their green soapbox!",
      "Do you know that they sell Muddy Buddies by the bag? I could feel my thighs getting bigger so I just walked away.",
      "You know, if Little Debbie ate the stuff she's selling us she wouldn't be <em>Little</em> Debbie any more!",
      "I love entering my password with my thumb. You can't forget your thumbs.",
      "It's like Christmas threw up on our livingroom.",
      "I just wrote a poem, do you want to hear it? <em>Coffee's good. Coffee's hot. Coffee, coffee, coffee.</em> It's like a haiku. That came from my heart, I thought of that while you were getting my coffee.",
      "The Little Mermaid doesn't count as a princess. She's like an aquatic whore.",
      "OK, now everyone go down to the basement and pretend that you don't exist. I should have said \"pretend <em>I</em> don't exist\". That made me sound like a terrible mother!",
      "Superheros are supposed to be the most awesome people but they wear their underwear on the outside of their suits. I'm like `\"Dude, those go on <em>first</em>.\"",
      "Where is the TV and why is it not on?",
      "Why do they call them packing peanuts? They should call them packing cheese doodles!",
      "Jacky, do you want to go into the store? Well, I'm not going to take a whiny-butt into the store OK?",
      "Me: Does the lasagna need to come out of the oven? Nic: I don't know, I just stuck it in there. What? I'm not feeling very maternal today!",
      "I tried to put our names together and its either \"New\" or \"Dic\" so <em>that's</em> not going to work.",
      "(After eating a pine nut) It's like Christmas in my mouth.",
      "I'm going to serve meatballs for lunch. It's going to be great.",
      "Joe: Do you like things that are stale? Nic: No, unless it's marshmallows, Twizzlers, or candy of any kind.",
      "Me: Do you want coffee? Nic: *scoffs* Do birds fly? Well, not all birds, which is probably why you asked that question.",
      "You are so close to being <em>grounded</em> but not <em>some</em> of you!",
      "Mikey: I want to spend time with you guys at night! Nic: Just two nights ago you sat up with us on the couch for two hours! Mikey:...throwing up."
].shuffle();

var sayWhat = function() {
    var $what = $("#what");
    var text = whats.shift();
    whats.push(text);
    $what.html(text);

    var maxLeft = $(window).width() - ($what.width() + 100);
    var maxTop = $(window).height() - ($what.height() + 100);
    $what.css({
        left: Math.floor(Math.random() * (maxLeft + 1)),
        top: Math.floor(Math.random() * (maxTop + 1))
    }).show();
}

$(function() {
    sayWhat();
    setInterval(sayWhat, 5000);
});
