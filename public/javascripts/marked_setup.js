(function() {
	var LANG_MAP = {
		'c': 'cpp',
		'js': 'javascript'
	};

	marked.setOptions({
		highlight: function(code, lang) {
			if (lang in LANG_MAP) {
				lang = LANG_MAP[lang];
			}
			if (lang in hljs.LANGUAGES) {
				return hljs.highlight(lang, code).value;
			}

			return hljs.highlightAuto(code).value;
		}
	});
})();
