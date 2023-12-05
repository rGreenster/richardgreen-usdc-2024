/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 


 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    result.SearchTerm = searchTerm;
    var resultIndex = 0;
    
/*
Iterate through the text in each line in each book in the scanned text object looking for the requested search term.
If the search term is found, add the appropriate information to the result entry to be returned upon searching
the entire scanned text object.
*/
    for (var book in scannedTextObj){
        for (var lines in scannedTextObj[book].Content){
            /*We split the text into tokens split by spaces, using a regular expression to remove periods, commas and other
            non alphanumeric symbols and use the includes() function to check the resulting array for the desired search term*/ 
            if (scannedTextObj[book].Content[lines].Text.replace(/[^0-9a-z'\- ]/gi, '').split(" ").includes(searchTerm)){
                
                var resultsEntry = {
                    "ISBN": "",
                    "Page": "",
                    "Line": ""
                };
                
                resultsEntry.ISBN = scannedTextObj[book].ISBN;
                resultsEntry.Page = scannedTextObj[book].Content[lines].Page;
                resultsEntry.Line = scannedTextObj[book].Content[lines].Line;
                result.Results[resultIndex] = resultsEntry;
                resultIndex++;
            } 
        }    
    } 
    return result; 
}


// Example input object - single book with content
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

// Example input object - multiple books with content
const multipleBooksIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Programming Pearls",
        "ISBN": "0201657880",
        "Content": [
            {
                "Page": 7,
                "Line": 6,
                "Text": "the element. Even if these conditions aren\'t satisfied (when there are multiple ele-"
            },
            {
                "Page": 7,
                "Line": 7,
                "Text": "ments or extra data, for instance), a key from a finite domain can be used as an index"
            }
        ] 
    }
]

// Example input object with no scanned content
const twentyLeaguesInNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [] 
    }
]

// Example empty input object.
const emptyIn = []
    
/** Example output object with single result*/
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

// Example output object with empty results
const twentyLeaguesOut2 = {
    "SearchTerm": "pearl",
    "Results": []
}

// Example output object with emtpy results for testing case sensitivity
const twentyLeaguesOut3 = {
    "SearchTerm": "Simply",
    "Results": []
}


// Example output object with results for testing case sensitivity
const twentyLeaguesOut4 = {
    "SearchTerm": "simply",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

// Example output object with empty results
const twentyLeaguesOut5 = {
    "SearchTerm": "dark",
    "Results": []
}

// Example output object with results with word at end of sentence
const twentyLeaguesOut6 = {
    "SearchTerm": "momentum",
    "Results": [
        {
        "ISBN": "9780000528531",
        "Page": 31,
        "Line": 8
        }
    ]
}

// Example output object with contraction results
const programmingPearls = {
    "SearchTerm": "aren\'t",
    "Results": [
        {
            "ISBN": "0201657880",
            "Page": 7,
            "Line": 6
        }

    ]
}

// Example empty output object for testing with empty input
const emptyOutTest = {
    "SearchTerm": "empty",
    "Results": []
}

// Example output object with multiple results
const multipleBooksOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "0201657880",
            "Page": 7,
            "Line": 6
        }

    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

// We can check that, given a known input, we get a known output.
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1 - positive search, single book, multiple lines");
} else {
    console.log("FAIL: Test 1 - single book, multiple lines");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

// We could choose to check that we get the right number of results.
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2 - result length");
} else {
    console.log("FAIL: Test 2 - result length");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// We can check that, given a known negative input, we get a known empty output. 
const test3result = findSearchTermInBooks("pearl", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3 - negative search, single book, multiple lines");
} else {
    console.log("FAIL: Test 3 - negative search, single book, multiple lines");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}

// We can check that, given a known empty input, we get a known output with search term and empty results. 
const test4result = findSearchTermInBooks("empty", emptyIn);
if (JSON.stringify(emptyOutTest) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4 - empty input");
} else {
    console.log("FAIL: Test 4 - empty input");
    console.log("Expected:", emptyOutTest);
    console.log("Received:", test4result);
}

// We can check that, given a known input, we get a known output that correctly returns empty results. 
const test5result = findSearchTermInBooks("Simply", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5 - negative search, case sensitivity");
} else {
    console.log("FAIL: Test 5 - negative search, case sensitivity");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test5result);
}

// We can check that, given a known input with a book with no content, we get a known output. 
const test6result = findSearchTermInBooks("Simply", twentyLeaguesInNoContent);
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6 - negative search, book with no content");
} else {
    console.log("FAIL: Test 6 - negative search, book with no content");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test6result);
}

// We can check that, given a known input with multiple books, we get a known output with multiple results.
const test7result = findSearchTermInBooks("the", multipleBooksIn);
if (JSON.stringify(multipleBooksOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7 - positive search, multiple books in with multiple results");
} else {
    console.log("FAIL: Test 7 - positive search, multiple books in with multiple results");
    console.log("Expected:", multipleBooksOut);
    console.log("Received:", test7result);
}

// We can check that, given a known input, we get a known output that correctly returns empty results. 
const test8result = findSearchTermInBooks("simply", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut4) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8 - positive search, case sensitivity");
} else {
    console.log("FAIL: Test 8 - positive search, case sensitivity");
    console.log("Expected:", twentyLeaguesOut4);
    console.log("Received:", test8result);
}

// We can check that, given a known input with partial match, we get a known output that correctly returns empty results. 
const test9result = findSearchTermInBooks("dark", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut5) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9 - positive search, partial match");
} else {
    console.log("FAIL: Test 9 - positive search, partial match");
    console.log("Expected:", twentyLeaguesOut5);
    console.log("Received:", test9result);
}

// We can check that, given a known input with partial match, we get a known output that correctly returns results. 
const test10result = findSearchTermInBooks("momentum", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut6) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10 - positive search, end of sentence");
} else {
    console.log("FAIL: Test 10 -  positive search, end of sentence");
    console.log("Expected:", twentyLeaguesOut6);
    console.log("Received:", test10result);
}

// We can check that, given a known input with contraction search term, we get a known output that correctly returns results.
const test11result = findSearchTermInBooks("aren't", multipleBooksIn);
if (JSON.stringify(programmingPearls) === JSON.stringify(test11result)) {
    console.log("PASS: Test 11 - positive search, contraction");
} else {
    console.log("FAIL: Test 11 -  positive search, contraction");
    console.log("Expected:", programmingPearls);
    console.log("Received:", test11result);
}