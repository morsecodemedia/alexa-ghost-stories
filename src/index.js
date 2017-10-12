let languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : 'Welcome to Ghost Stories!',
            'HELP'    : 'Say about, to hear more about submitting a story to the skill. Say updates, to hear about the latest addition. Or say, tell me a ghost story, when you are ready to be frightening.',
            'ABOUT'   : 'Ghost stories is a crowd-sourced skill. If you would like to submit a story to the skill, please visit the skill\'s webpage, or the skill\'s page in the Amazon store for more information.',
            'STOP'    : 'Okay, scare you later!',
			'UPDATES' : '<say-as interpret-as="date">10102017</say-as>, the skill was launched with 9 frightening ghost stories.'
        }
    }
};
let data = {
    'stories' : [
        {
			'title'			: 'Axe Murder Hollow',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
			'story'			: 'Susan and Ned were driving through a wooded empty section of highway. Lightning flashed, thunder roared, the sky went dark in the torrential downpour. "We\'d better stop," said Susan. Ned nodded his head in agreement. He stepped on the brake, and suddenly the car started to slide on the slick pavement. They plunged off the road and slid to a halt at the bottom of an incline. Pale and shaking, Ned quickly turned to check if Susan was all right. When she nodded, Ned relaxed and looked through the rain soaked windows. "I\'m going to see how bad it is," he told Susan, and when out into the storm. She saw his blurry figure in the headlight, walking around the front of the car. A moment later, he jumped in beside her, soaking wet. "The car\'s not badly damaged, but we’re wheel-deep in mud," he said. "I\'m going to have to go for help." Susan swallowed nervously. There would be no quick rescue here. He told her to turn off the headlights and lock the doors until he returned. Axe Murder Hollow. Although Ned hadn’t said the name aloud, they both knew what he had been thinking when he told her to lock the car. This was the place where a man had once taken an axe and hacked his wife to death in a jealous rage over an alleged affair. Supposedly, the axe-wielding spirit of the husband continued to haunt this section of the road. Outside the car, Susan heard a shriek, a loud thump, and a strange gurgling noise. But she couldn’t see anything in the darkness. Frightened, she shrank down into her seat. She sat in silence for a while, and then she noticed another sound. <break time="1s"/>Bump. <break time="1s"/>Bump. <break time="1s"/>Bump. It was a soft sound, like something being blown by the wind. Suddenly, the car was illuminated by a bright light. An official sounding voice told her to get out of the car. Ned must have found a police officer. Susan unlocked the door and stepped out of the car. As her eyes adjusted to the bright light, she saw it. Hanging by his feet from the tree next to the car was the dead body of Ned. His bloody throat had been cut so deeply that he was nearly decapitated. The wind swung his corpse back and forth so that it thumped against the tree. <break time="1s"/>Bump. <break time="1s"/>Bump. <break time="1s"/>Bump. Susan screamed and ran toward the voice and the light. As she drew close, she realized the light was not coming from a flashlight. Standing there was the glowing figure of a man with a smile on his face and a large, solid, and definitely real axe in his hands. She backed away from the glowing figure until she bumped into the car. "Playing around when my back was turned," the ghost whispered, stroking the sharp blade of the axe with his fingers. "You’ve been very naughty." The last thing she saw was the glint of the axe blade in the eerie, incandescent light.',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		},
		{
			'title'			: '',
			'author'		: 'S.E. Schlosser',
			'contributor'	: 'morsecodemedia',
            'story'			: '',
		}
    ]
}

let Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

let handlers = {
    'LaunchRequest': function () {
        var say = this.t('WELCOME') + ' ' + this.t('HELP');
        this.emit(':ask', say, say);
    },
    'AboutIntent': function () {
        this.emit(':tell', this.t('ABOUT'));
    },
	'UpdatesIntent': function() {
		this.emit(':tell', this.t('UPDATES'));
	},
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', this.t('HELP'));
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP'));
    },
	'AMAZON.NoIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
	'AMAZON.YesIntent': function () {
        let storyTitle = this.attributes['story'];
        let storyDetails = getStoryBytitle(storyTitle);

        let say = storyDetails.title
            + ' by ' + storyDetails.author
            + ', was contributed by ' + storyDetails.contributor
            + ', ' + storyDetails.story;

        let card = storyDetails.title + '\n author: ' + storyDetails.author + '\n contributed by: '
            + storyDetails.contributor + '\n';

        this.emit(':tellWithCard', say, storyDetails.title, card);

    },
    'StoryIntent': function () {
        let story = randomArrayElement(getStoryByTitle());
        this.attributes['story'] = story.title;

        let say = 'Ah, here's a good one, ' + story.title + '. Would you like to hear it?';
        this.emit(':ask', say);
    }
};

function getStoryByTitle() {
    let list = [];
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