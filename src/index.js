let languageStrings = {
    'en': {
        'translation': {
            'WELCOME' : 'Welcome to Ghost Stories!',
            'HELP'    : 'Say about, to hear more about submitting a story to the skill. Say updates, to hear about the latest addition. Or say, tell me a ghost story, when you are ready to be frightening.',
            'ABOUT'   : 'Ghost stories is a crowd-sourced skill. If you would like to submit a story to the skill, please visit the skill's webpage, or the skill's page in the Amazon store for more information.',
            'STOP'    : 'Okay, scare you later!',
			'UPDATES' : 'October 10th 2017, the skill was launched with 9 frightening ghost stories.'
        }
    }
};
let data = {
    'stories' : [
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