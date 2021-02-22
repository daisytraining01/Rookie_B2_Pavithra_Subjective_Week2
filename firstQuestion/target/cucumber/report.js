$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('firstQue\First.feature');
formatter.feature({
  "line": 1,
  "name": "Registering into the one cool summer",
  "description": "",
  "id": "registering-into-the-one-cool-summer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Performing the user registration",
  "description": "",
  "id": "registering-into-the-one-cool-summer;performing-the-user-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User in the registration form",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enters required data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 5
    },
    {
      "cells": [
        "FirstName",
        "Pavithra"
      ],
      "line": 6
    },
    {
      "cells": [
        "LastName",
        "Palani"
      ],
      "line": 7
    },
    {
      "cells": [
        "phone",
        "9003403857"
      ],
      "line": 8
    },
    {
      "cells": [
        "email",
        "pavi@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "Address",
        "Venu Street"
      ],
      "line": 10
    },
    {
      "cells": [
        "City",
        "Tirupattur"
      ],
      "line": 11
    },
    {
      "cells": [
        "State",
        "Melbourne"
      ],
      "line": 12
    },
    {
      "cells": [
        "pin",
        "635601"
      ],
      "line": 13
    },
    {
      "cells": [
        "country",
        "AUSTRALIA"
      ],
      "line": 14
    },
    {
      "cells": [
        "userName",
        "Pavithra2"
      ],
      "line": 15
    },
    {
      "cells": [
        "password",
        "Pavithra@123"
      ],
      "line": 16
    },
    {
      "cells": [
        "confirmPassword",
        "Pavithra@123"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Registration should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstQuestion.open_guru99()"
});
formatter.result({
  "duration": 4788568000,
  "status": "passed"
});
formatter.match({
  "location": "FirstQuestion.enter_valid_data(DataTable)"
});
formatter.result({
  "duration": 6214822600,
  "status": "passed"
});
formatter.match({
  "location": "FirstQuestion.successful_login()"
});
formatter.result({
  "duration": 535966600,
  "status": "passed"
});
});