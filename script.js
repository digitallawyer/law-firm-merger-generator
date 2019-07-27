$(document).ready(function () {

        var index,
            prevIndex,
            s,
            words;

        $('button').click(function() {

          // Store all the words in an array.
          words = $('#wordbank').val().split('\n');

          if (words.length > 1) {

            // Remove all child nodes from the <ul>
            $('#names').empty();

            // Create name ideas by combining two random words
            for (var i = 0; i < 3; i++) {
              randomWords = randomName(words).replace(/ +(?= )/g,'');
              $('#names').append("<a target=\"_blank\" href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdigitallawyer.github.io%2Flaw-firm-merger-generator%2F&text=" + randomWords + "... The%20future%20of%20law?%20%23FutureLaw%20%23Mergers\"><li>" +
                              randomWords +
                            "</li></a>");
            }

          } else {
            alert("You need at least 2 words for this to work.");
          }

        });


        function randomWord(wordbank) {
          // Avoid duplicate names
          while (prevIndex == index)
            index = Math.round(Math.random() * (wordbank.length - 1));

          prevIndex = index;
          return wordbank[index];
        }

        function randomName(wordbank) {
          // Sometimes an "LLP" will be added to the end of the name.
          s = Math.round(Math.random() * 1) ? "" : " LLP";
          return randomWord(wordbank) + " " + randomWord(wordbank) + s;
        }

});
