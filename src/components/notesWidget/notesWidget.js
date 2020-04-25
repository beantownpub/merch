import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import CodeBlock from './codeBlock'
import ReactMarkdown from 'react-markdown'

// const ReactMarkdown = require('react-markdown/with-html')

const StyledNotesContainer = styled.div `
    margin: auto;
    padding: 2em;
    font-family: gotham-narrow-ultra;
    display: flex;
    flex-flow: row wrap;
    h1 {
        margin: .5em auto;
        font-family: gotham;
        font-size: 1.5em;
        text-align: left;
        text-transform: uppercase;
    }
    h3 {
        margin: auto;
        font-family: gotham-narrow-ultra;
        font-size: 1.5em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
    p {
        margin: .5em auto;
        font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
        font-size: 1.5em;
        line-height: 1.5em
    }
    a {
        color: blue;
        text-transform: uppercase;
        text-decoration: none;
    }
    a:hover {
        color: red;
    }
`

const StyledNotePreview = styled.div`
    margin: .25em auto;
    padding: .5em;
    width: 20em;
    height: 20em;
    display: flex;
    flex-flow: column wrap;
    border: 1px solid #e2e2e2;
    border-radius: .4em;
    background-color: #ffff66;
    h2 {
        min-height: 3em;
        font-family: gotham-narrow-ultra;
        font-size: 1.1em;
        color: crimson;
        text-transform: uppercase;
        letter-spacing: .2em;
        text-align: center;
    }
    p {
        padding: .25em;
        min-height: 7em;
        overflow: scroll;
        font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
        font-size: 1.25em;
        line-height: 1.5em;
        background-color: #fffde2;
        border: 1px solid #e2e2e2;
        border-radius: .4em;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    button {
        margin: auto;
        padding: .3em;
        width: 100%;
        font-family: gotham-narrow-ultra;
        font-size: 1.25em;
        text-transform: uppercase;
        letter-spacing: .2em;
        border: 1px solid #e2e2e2;
        border-radius: .4em;
    }
    button:hover {
        background-color: whitesmoke;
    }
`

const StyledNote = styled.div `
    margin: auto;
    padding: 4em;
    font-family: gotham-narrow-ultra;
    display: flex;
    flex-flow: column wrap;
    border-radius: .4em;
    background-color: white;
    width: 960px;
    h1 {
        margin: .5em 0;
        font-family: gotham;
        font-size: 1.5em;
        text-align: left;
        text-transform: uppercase;
        color: crimson;
    }
    h2 {
        text-transform: uppercase;
        letter-spacing: .15em;
    }
    h3 {
        margin: auto;
        font-family: gotham-narrow-ultra;
        font-size: 1.5em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
    p {
        margin: .5em auto;
        width: 100%;
        font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
        font-size: 1.5em;
        font-weight: 200;
        line-height: 1.75em;
        a {
            margin: 0;
            color: blue;
            text-transform: uppercase;
            text-decoration: none;
        }
        a:hover {
            color: red;
        }
    }
    button {
        margin: auto;
        padding: 1em;
        width: 10em;
        font-family: gotham-narrow-ultra;
        font-size: 1.3em;
        text-transform: uppercase;
        letter-spacing: .2em;
        border: 1px solid #e2e2e2;
        border-radius: .4em;
    }
`

const StyledNotes = styled.div`
    margin: auto;
    width: 900px;
    display: flex;
`

function viewNote (note) {
    const element = (
        <StyledNote>
            <ReactMarkdown
                source={note.body}
                renderers={{ code: CodeBlock }}
            />
            <button onClick={() => hideNote()}>Hide Note</button>
        </StyledNote>
    )
    ReactDOM.render(element, document.getElementById('note'))
}

function hideNote () {
    const element = (
        <div></div>
    )
    ReactDOM.render(element, document.getElementById('note'))
}

function noteButton (key, note) {
    return (
        <StyledNotePreview key={key}>
            <div>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
                <button onClick={() => viewNote(note)}>View Note</button>
            </div>
        </StyledNotePreview>
    )
}

function renderNotes (notes) {
    let renderedNotes = []
    let cnt = 1
    for (const note of Object.keys(notes)) {
        renderedNotes.push(noteButton(cnt, notes[note]))
        cnt++
    }
    return (
        <StyledNotesContainer>
            {renderedNotes}
        </StyledNotesContainer>
    )
}

export default class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            isLoading: true
        }
    }
    componentDidMount() {
        let notesUrl = 'http://localhost:5000/v1/notes/all'
        fetch(notesUrl)
            .then(response => response.json())
            .then(data => this.setState({ notes: data, isLoading: false}))
            .catch(error => console.log(error))
    }

    render () {
        let notes = this.state.notes
        return (
            <StyledNotes>{renderNotes(notes)}</StyledNotes>
        )
    }
}