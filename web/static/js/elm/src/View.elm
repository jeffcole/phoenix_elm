module View exposing (root)

import Html exposing (..)
import Html.Attributes exposing (..)


root : Html a
root =
    div [ class "container" ]
        [ section [ class "welcome" ]
            [ h1 [] [ text "Phoenix + Elm using Webpack, on Heroku" ]
            , div []
                [ text "View the source code at "
                , a [ href "https://github.com/jeffcole/phoenix_elm_webpack_heroku" ]
                    [ text "jeffcole/phoenix_elm_webpack_heroku" ]
                , text "."
                ]
            ]
        ]
