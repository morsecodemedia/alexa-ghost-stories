'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.fa87b466-106d-4c71-83af-16d03b2e2c5c';

const SKILL_NAME = 'Ghost Stories';
const ABOUT_MESSAGE = "Ghost Stories is a crowd-sourced skill. If you would like to submit a story to the skill, please visit the skill\'s webpage, or the skill\'s page in the Amazon store for more information.";
const HELP_MESSAGE = 'Say about, to hear more about submitting a story to the skill. Say updates, to hear about the latest addition. Or say, tell me a ghost story, when you are ready to be frightening.';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Okay, scare you later!';
const UPDATES_MESSAGE = '<say-as interpret-as="date">10122017</say-as>, the skill was updated with 9 frightening ghost stories.';

const data = {
    'stories' : [
        {
			'title'			: 'Axe Murder Hollow',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
			'story'			: 'Susan and Ned were driving through a wooded empty section of highway. Lightning flashed, thunder roared, the sky went dark in the torrential downpour. "We\'d better stop," said Susan. Ned nodded his head in agreement. He stepped on the brake, and suddenly the car started to slide on the slick pavement. They plunged off the road and slid to a halt at the bottom of an incline. Pale and shaking, Ned quickly turned to check if Susan was all right. When she nodded, Ned relaxed and looked through the rain soaked windows. "I\'m going to see how bad it is," he told Susan, and when out into the storm. She saw his blurry figure in the headlight, walking around the front of the car. A moment later, he jumped in beside her, soaking wet. "The car\'s not badly damaged, but we’re wheel-deep in mud," he said. "I\'m going to have to go for help." Susan swallowed nervously. There would be no quick rescue here. He told her to turn off the headlights and lock the doors until he returned. Axe Murder Hollow. Although Ned hadn’t said the name aloud, they both knew what he had been thinking when he told her to lock the car. This was the place where a man had once taken an axe and hacked his wife to death in a jealous rage over an alleged affair. Supposedly, the axe-wielding spirit of the husband continued to haunt this section of the road. Outside the car, Susan heard a shriek, a loud thump, and a strange gurgling noise. But she couldn’t see anything in the darkness. Frightened, she shrank down into her seat. She sat in silence for a while, and then she noticed another sound. <break time="1s"/>Bump. <break time="1s"/>Bump. <break time="1s"/>Bump. It was a soft sound, like something being blown by the wind. Suddenly, the car was illuminated by a bright light. An official sounding voice told her to get out of the car. Ned must have found a police officer. Susan unlocked the door and stepped out of the car. As her eyes adjusted to the bright light, she saw it. Hanging by his feet from the tree next to the car was the dead body of Ned. His bloody throat had been cut so deeply that he was nearly decapitated. The wind swung his corpse back and forth so that it thumped against the tree. <break time="1s"/>Bump. <break time="1s"/>Bump. <break time="1s"/>Bump. Susan screamed and ran toward the voice and the light. As she drew close, she realized the light was not coming from a flashlight. Standing there was the glowing figure of a man with a smile on his face and a large, solid, and definitely real axe in his hands. She backed away from the glowing figure until she bumped into the car. "Playing around when my back was turned," the ghost whispered, stroking the sharp blade of the axe with his fingers. "You’ve been very naughty." The last thing she saw was the glint of the axe blade in the eerie, incandescent light.',
		},
		{
			'title'			: 'Bear Lake Monster',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'If you travel to Bear Lake in Utah on a quiet day, you just might catch a glimpse of the Bear Lake Monster. The monster looks like a huge brown snake and is nearly 90 feet long. It has ears that stick out from the side of its skinny head and a mouth big enough to eat a man. According to some, it has small legs and it kind of scurries when it ventures out on land. But in the water - watch out! It can swim faster than a horse can gallop - makes a mile a minute on a good day. Sometimes the monster likes to sneak up on unwary swimmers and blow water at them. The ones it doesn\'t carry off to eat, that is. A fella I heard about spotted the monster early one evening as he was walking along the lake. He tried to shoot it with his rifle. The man was a crack shot, but not one of his bullets touched that monster. It scared the heck out of him and he high tailed it home faster than you can say Jackie Robinson. Left his rifle behind him and claimed the monster ate it. Sometimes, when the monster has been quiet for a while, people start saying it is gone for good. Some folks even dredge up that old tale that says how Pecos Bill heard about the Bear Lake monster and bet some cowpokes that he could wrestle that monster until it said uncle. According to them folks, the fight lasted for days and created a hurricane around Bear Lake. Finally, Bill flung that there monster over his shoulder and it flew so far it went plumb around the world and landed in Loch Ness, where it lives to this day. Course, we know better than that. The Bear Lake Monster is just hibernating-like. Keep your eyes open at dusk and maybe you\'ll see it come out to feed. Just be careful swimming in the lake, or you might be its next meal!',
		},
		{
			'title'			: 'Big Liz',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'The Master of the plantation was a firm supporter of the Confederate President and had committed to send as much food as he could to the Southern army. Things were going well at first, until the Yankees began attacking the Master\'s supply lines. The Master suspected a traitor among his slaves, and soon discovered that the Yankee spy was a slave-woman named Big Liz. She was a behemoth of a girl who could pick up two full-grown pigs, one under each arm, and cart them over to the slaughterhouse without assistance. If he confronted her directly and she fought back, she would take him to pieces. So the Master came up with a different plan to rid himself of the spy. He approached the giant girl and asked her to assist him with a special task. He told her that President Jefferson Davis had entrusted him with a large chest full of gold. To keep it out of Yankee hands, he wanted to bury the chest where it would never be found. The girl\'s eyes gleamed when she heard this false report. The Master knew she was already planning to betray the existence of the chest to the Yankees. The Master made Big Liz carry the heavy trunk several miles out into the swamp land and asked her to dig a deep hole for the trunk. He sat at his leisure while she worked and strained for hours against the muddy ground, which kept oozing back into the hole. When the slave girl was completely exhausted, the Master decreed the hole to be large enough for his war chest. Wearily, Big Liz dropped the shovel and pulled the heavy chest down until it lay at her feet. Then she started to climb out of the deep hole. But the Master barred her way, and Big Liz gazed up at him in sudden fear as he loomed over her. "Traitor! Yankee spy!" The Master hissed. "There is only one path open to a traitor." The Master swung his sword at her, and the sharp edge of the blade cut cleaning through the slave girl\'s neck. Her head went rolling away into the tall grass as her body toppled across the chest. The Master heaped dirt over the chest and the body of slave girl who had betrayed him. Briefly, he considered finding her head and burying it in the pit with her body, but it was too dark to go wandering in the dangerous marshland, and he knew that scavengers would make short work of the head when they found it. As the Master walked toward home through the dark swamp, he became aware of a prickling sensation at the back of his neck, as if someone were watching him. The Master walked faster as clouds obscured the light of the moon. The Master\'s teeth chattered as a breeze cut through him like the sharpened blade of the sword at his side, and his straining ears picked up the sound of footsteps on the path behind him. The Master was filled with a terrible, superstitious dread of demons and witches and ghosts. He broke out into a panicked run, fleeing up the path as fast as his legs would carry him. To his relief, he saw the lights of his house rise before him, and knew he was home. As he rounded the back corner of his house, he was confronted by a massive, dirt-encrusted figure that glowed with blue fire. The smell of rotting leaves and marsh grass filled his nostrils as his eyes raced up and up the tall creature, until they rested on the stump of its neck, where a head had resided only an hour before. Then he heard a chuckle from the creature\'s side, and he saw the phantom\'s head tucked under her arm. The Master stumbled backward, gabbling desperately in fear as the ghost placed her head upon the ground with one hand and grabbed the collar of his shirt with the other. The murdered slave girl snapped the Master\'s neck in two and dropped his dead body to the ground beneath his bedroom window. Then Big Liz gathered up her severed head and vanished into the darkness. They say that on the anniversary of her death, the ghost of Big Liz still may be seen roaming the swamp lands near her old home. Anyone foolish enough to walk near her grave will be driven away by the phantom, which to this day still defends the place where the Confederate chest is buried.',
		},
		{
			'title'			: 'Bloody Mary',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'She lived deep in the forest in a tiny cottage and sold herbal remedies for a living. Folks living in the town nearby called her Bloody Mary, and said she was a witch. None dared cross the old crone for fear that their cows would go dry, their food-stores rot away before winter, their children take sick of fever, or any number of terrible things that an angry witch could do to her neighbors. Then the little girls in the village began to disappear, one by one. No one could find out where they had gone. Grief-stricken families searched the woods, the local buildings, and all the houses and barns, but there was no sign of the missing girls. A few brave souls even went to Bloody Mary\'s home in the woods to see if the witch had taken the girls, but she denied any knowledge of the disappearances. Still, it was noted that her haggard appearance had changed. She looked younger, more attractive. The neighbors were suspicious, but they could find no proof that the witch had taken their young ones. Then came the night when the daughter of the miller rose from her bed and walked outside, following an enchanted sound no one else could hear. The miller\'s wife had a toothache and was sitting up in the kitchen treating the tooth with an herbal remedy when her daughter left the house. She screamed for her husband and followed the girl out of the door. The miller came running in his nightshirt. Together, they tried to restrain the girl, but she kept breaking away from them and heading out of town. The desperate cries of the miller and his wife woke the neighbors. They came to assist the frantic couple. Suddenly, a sharp-eyed farmer gave a shout and pointed towards a strange light at the edge of the woods. A few townsmen followed him out into the field and saw Bloody Mary standing beside a large oak tree, holding a magic wand that was pointed towards the miller\'s house. She was glowing with an unearthly light as she set her evil spell upon the miller\'s daughter. The townsmen grabbed their guns and their pitchforks and ran toward the witch. When she heard the commotion, Bloody Mary broke off her spell and fled back into the woods. The far-sighted farmer had loaded his gun with silver bullets in case the witch ever came after his daughter. Now he took aim and shot at her. The bullet hit Bloody Mary in the hip and she fell to the ground. The angry townsmen leapt upon her and carried her back into the field, where they built a huge bonfire and burned her at the stake. As she burned, Bloody Mary screamed a curse at the villagers. If anyone mentioned her name aloud before a mirror, she would send her spirit to revenge herself upon them for her terrible death. When she was dead, the villagers went to the house in the wood and found the unmarked graves of the little girls the evil witch had murdered. She had used their blood to make her young again. From that day to this, anyone foolish enough to chant Bloody Mary\'s name three times before a darkened mirror will summon the vengeful spirit of the witch. It is said that she will tear their bodies to pieces and rip their souls from their mutilated bodies. The souls of these unfortunate ones will burn in torment as Bloody Mary once was burned, and they will be trapped forever in the mirror.',
		},
		{
			'title'			: 'Don\'t Sell My House',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'Life seemed perfect to Mark when the widower brought his new bride Lisa home to the lovely two-story cottage he had build for his deceased first wife. Things were very happy for about a year, and Mark was ecstatic when he learned Lisa was expecting twins. The house was rather small for a double addition to the family, so Mark and Lisa put the cottage up for sale and started searching for a bigger house. That\'s when the problems began. Suddenly, the cottage would be filled with the distinctive smell of expensive perfume. The first time Mark smelled it, he turned pale and told Lisa that it was the scent his dead wife had favored. Then furniture that Lisa had rearranged moved back to its original place. The books in Mark\'s study were taken out of their categories and put in alphabetical order, the way his former wife had kept them. The ghost of Mark\'s first wife had returned to the little cottage. But why now, a full year after he had remarried? One afternoon, Lisa was down in the basement doing laundry while Mark was out front discussing the sale of the cottage with their attorney. They had just received a generous bid on the house and had decided to accept it. When Lisa finished emptying the washing machine, she turned to go back upstairs and saw a young woman floating a foot above the staircase. "This is my house. Don\'t sell my house!" the woman said. Her pretty face transformed with rage. She shook her fist at Lisa. Lisa shrieked, dropped the basket of wet laundry, and ran outside. Slamming the basement door behind her, Lisa locked it and sat down on the lawn, gasping for breath. All at once, the basement door started shaking violently, as if someone were pushing against it. "Don\'t sell my house," the phantom exclaimed again, shaking the door. "If you sell my house, something terrible will happen to your family! Don\'t sell my house!" The roar of a car engine pierced the ghost\'s words, as the attorney  bade Mark goodbye and drove away. Immediately, the shaking and pounding ceased, as if the departure of the hated real-estate attorney had momentarily appeased the ghost. When Lisa described the ghost, Mark recognized her as his dead wife. Until then, he had forgotten that he promised his first wife that he would never sell the cottage. Mark and Lisa tried to appease the ghost by bringing in a priest to pray over the cottage.  But the house continued to be filled with the choking smell of expensive perfume. Lisa was afraid for her unborn babies, living in such a haunted atmosphere. After much discussion, Mark and Lisa decided to defy the phantom and sell the cottage. On the night following the family\'s move, Lisa was struck with a terrible pain in her abdomen. Mark rushed her to the hospital, where she gave birth to the twins, who were stillborn. On his way home from the hospital, Mark\'s car was struck by a truck, and he was killed instantly. At the same moment, Lisa sat bolt upright in her hospital bed, staring at an empty corner of the room. She screamed once in terror at the sight of the phantom floating before her eyes, then she died instantly from a brain aneurism.',
		},
		{
			'title'			: 'Fifty-cent Piece',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'There is a story told in Troy and Albany about a couple returning home from a trip to New England. They were driving home in a carriage, and were somewhere near Spiegletown when the light failed and they knew they would have to seek shelter for the night. The husband spied a light through the trees and turned their horse into a small lane leading up a hill. A pleasant little house stood at the crest, and an old man and his wife met the couple at the door. They were in nightclothes and were obviously about to turn in, but they welcomed the travelers and offered them a room. The old woman bustled about making tea and offering freshly-baked cakes. Then the travelers were shown to their room. The husband wanted to pay the old couple for their lodgings, but the old lady shook her head and the old man refused any payment for such a small service to their fellow New Yorkers. The travelers awoke early and tiptoed out of the house, leaving a shiny fifty-cent coin in the center of the kitchen table where the old couple could not miss it. The husband hitched up the horse and they went a few miles before they broke their fast at a little restaurant in Spiegletown. The husband mention the nice old couple to the owner of the restaurant and the man turned pale. "Where did you say that house was?" he asked. The husband described the location in detail. "You must be mistaken," said the restaurant owner. "That house was destroyed three years ago by a fire that killed the Brown family." "I don\'t believe it," the husband said flatly. "Mr. and Mrs. Brown were alive and well last night." After debating for a few more minutes, the couple and the restaurant owner drove the carriage back out of town towards the old Brown place. They turned into the lane, which was overgrown with weeds, and climbed the hill to the crest. There they found a burned out shell of a house that had obviously not sheltered anyone for a long time. "I must have missed the track," said the husband. And then his wife gave a terrified scream and fainted into his arms. As he caught her, the husband looked into the ruin and saw a burnt table with a shiny fifty-cent piece lying in the center.',
		},
		{
			'title'			: 'The Hook',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'The reports had been on the radio all day, though she hadn\'t paid much attention to them. Some crazy man had escaped from the state asylum. They were calling him the Hook Man since he had lost his right arm and had it replaced with a hook. He was a killer, and everyone in the region was warned to keep watch and report anything suspicious. But this didn\'t interest her. She was more worried about what to wear on her date. After several consultation calls with friends, she chose a blue outfit in the very latest style and was ready and waiting on the porch when her boyfriend came to pick her up in his car. They went to a drive-in movie with another couple, then dropped them off and went parking in the local lover\'s lane. The blue outfit was a hit, and she cuddled close to her boyfriend as they kissed to the sound of romantic music on the radio. Then the announcer came on and repeated the warning she had heard that afternoon. An insane killer with a hook in place of his right hand was loose in the area. Suddenly, the dark, moonless night didn\'t seem so romantic to her. The lover\'s lane was secluded and off the beaten track. A perfect spot for a deranged mad-man to lurk, she thought, pushing her amorous boyfriend away. "Maybe we should get out of here," she said. "That Hook Man sounds dangerous." "Awe, c\'mon babe, it\'s nothing," her boyfriend said, trying to get in another kiss. She pushed him away again. "No, really. We\'re all alone out here. I\'m scared," she said. They argued for a moment. Then the car shook a bit, as if something…or someone…had touched it. She gave a shriek and said: "Get us out of here now!" "Jeeze," her boyfriend said in disgust, but he turned the key and went roaring out of the lover\'s lane with a screeching of his tires. They drove home in stony silence, and when they pulled into her driveway, he refused to help her out of the car. He was being so unreasonable, she fumed to herself. She opened the door indignantly and stepped into her driveway with her chin up and her lips set. Whirling around, she slammed the door as hard as she could. And then she screamed. Her boyfriend leapt out of the car and caught her in his arms. "What is it? What\'s wrong?" he shouted. Then he saw it. A bloody hook hung from the handle of the passenger-side door.',
		},
		{
			'title'			: 'Milk Bottles',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'She was just another poor, bedraggled woman, struggling to feed her family. He saw them all the time, their faces careworn, and blank. The Depression had created hundreds of them. He was one of the lucky ones who still had his grocery and money coming in to feed his family. She came one day to his shop, carrying two empty milk bottles, and wordlessly placed them on the counter in front of him. He took the empties and replaced them with full bottles, saying: "Ten cents, please." She did not reply. She just took the bottles and left the shop. He might have gone after her to demand his money, or called the police, but he did neither. Her need was in her face, and he always felt a little guilty at being one of the lucky ones with money and a job. She was probably one of the migrant workers, he decided. She was back the next day with two empty milk bottles. He replaced them with full bottles and watched as she hurried out the door. She looked so worried that he wondered if she had a job at all. If she came back, he would offer her a part-time position cleaning the store. She came again the next morning, and exchanged her empty bottles for full without saying a word. He tried to talk to her, to ask if she wanted a job, but she practically ran from the store with the milk. Her urgency worried him. He followed, wondering what he could do to help. To his surprise, she headed away from the migrant camp outside of town. She went instead to the graveyard by the river. As he watched, she hurried up to a stone marker and then disappeared into the ground. He rubbed his eyes in disbelief. Then he heard the muffled cry of a baby. It was coming from the ground underneath the stone marker where the woman had disappeared! He ran back to the store and phoned the police. Within minutes, the graveyard was swarming with people, and the workers started digging up the grave. When the casket was opened, the store owner saw the woman who had visited his store lying dead within it. In her arms, she held a small baby and two full milk bottles. The baby was still alive.',
		},
		{
			'title'			: 'Yellow Ribbon',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morse code media',
            'story'			: 'Jane wore a yellow ribbon around her neck everyday. And I mean everyday, rain or shine, whether it matched her outfit or not. It annoyed her best friend Johnny after awhile. He was her next door neighbor and had known Jane since she was three. When he was young, he had barely noticed the yellow ribbon, but now they were in high school together, it bothered him. "Why do you wear that yellow ribbon around your neck, Jane?" he\'d ask her every day. But she wouldn\'t tell him. Still, in spite of this aggravation, Johnny thought she was cute. He asked her to the soda shoppe for an ice cream sundae. Then he asked her to watch him play in the football game. Then he started seeing her home. And come the spring, he asked her to the dance. Jane always said yes when he asked her out. And she always wore a yellow dress to match the ribbon around her neck. It finally occurred to Johnny that he and Jane were going steady, and he still didn\'t know why she wore the yellow ribbon around her neck. So he asked her about it yet again, and yet again she did not tell him. "Maybe someday I\'ll tell you about it," she\'d reply. Someday! That answer annoyed Johnny, but he shrugged it off, because Jane was so cute and fun to be with. Well, time flew past, as it has a habit of doing, and one day Johnny proposed to Jane and was accepted. They planned a big wedding, and Jane hinted that she might tell him about the yellow ribbon around her neck on their wedding day. But somehow, what with the preparations and his beautiful bride, and the lovely reception, Johnny never got around to asking Jane about it. And when he did remember, she got a bit teary-eyed, and said: "We are so happy together, what difference does it make?" And Johnny decided she was right. Johnny and Jane raised a family of four, with the usual ups and downs, laughter and tears. When their golden anniversary rolled around, Johnny once again asked Jane about the yellow ribbon around her neck. It was the first time he\'d brought it up since the week after their wedding. Whenever their children asked him about it, he\'d always hushed them, and somehow none of the kids had dared ask their mother. Jane gave Johnny as sad look and said: "Johnny, you\'ve waited this long. You can wait awhile longer." And Johnny agreed. It was not until Jane was on her death bed a year later that Johnny, seeing his last chance slip away, asked Jane one final time about the yellow ribbon she wore around her neck. She shook her head a bit at his persistence, and then said with a sad smile: "Okay Johnny, you can go ahead and untie it." With shaking hands, Johnny fumbled for the knot and untied the yellow ribbon around his wife\'s neck. And Jane\'s head fell off.',
		}
    ]
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.AppId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    "LaunchRequest": function () {
		//this.response.speak(WELCOME_MESSAGE);
		//this.emit(':responseReady');
        this.emit(":tell", "You started this skill successfully!");
	},
	'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
	'AboutIntent': function () {
		this.response.speak(ABOUT_MESSAGE);
		this.emit(':responseReady');
	},
	'UpdatesIntent': function() {
		this.response.speak(UPDATES_MESSAGE);
		this.emit(':responseReady');
	},
	'AMAZON.NoIntent': function () {
		this.response.speak(STOP_MESSAGE);
		this.emit(':responseReady');
	},
	'AMAZON.YesIntent': function () {
		let storyTitle = this.attributes['story'];
		let storyDetails = getStoryByTitle(storyTitle);

		let STORY_MESSAGE = storyDetails.title
			+ ' by ' + storyDetails.author
			+ ', was contributed by ' + storyDetails.contributor
			+ ', ' + storyDetails.story;

        let CARD_MESSAGE = storyDetails.title + '\n author: ' + storyDetails.author + '\n contributed by: '
            + storyDetails.contributor + '\n';

		const speechOutput = STORY_MESSAGE;

		this.response.cardRenderer(SKILL_NAME, CARD_MESSAGE);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
	},
	'StoryIntent': function () {
		let story = randomArrayElement(getStoryByTitle());
		this.attributes['story'] = story.title;

		// TODO: Randomize the "found a story" reponse
		let FOUND_STORY_MESSAGE = 'Ah, here\'s a good one, ' + story.title + '. Would you like to hear it?';
		this.response.speak(FOUND_STORY_MESSAGE);
        this.emit(':responseReady');
	}

};

function getStoryByTitle() {
    var list = [];
    for (var i = 0; i < data.stories.length; i++) {
        if(data.stories[i].title >  -1) {
            list.push(data.stories[i]);
        }
    }
    return list;
}

function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}