import React from 'react'
import styled from 'styled-components'
// import SyntaxHighlighter from 'react-syntax-highlighter';
const ReactMarkdown = require('react-markdown')

const StyledNote = styled.div `
    margin: auto;
    padding: 1em;
    font-family: gotham-narrow-ultra;
    display: flex;
    flex-flow: column wrap;
    width: 768px;

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
    button {
        margin: auto;
        padding: .25em;
        width: 100%;
        border: 1px solid #e2e2e2;
        border-radius: .4em;
    }
`

export default class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            isLoading: true
        }
        this.hideNote = this.hideNote.bind(this)
        this.getNote = this.getNote.bind(this)
    }
    hideNote() {
        this.setState({ note: [] })
    }

    getNote(slug) {
        let noteUrl = 'http://localhost:5000/v1/notes/' + slug
        fetch(noteUrl)
            .then(response => response.json())
            .then(data => this.setState({ note: data, isLoading: false}))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        let slug = this.props.slug
        this.getNote(slug)
    }

    render () {
        let note = this.state.note
        // let note = this.getNote(this.props.slug)
        if (!this.state.note) {
            return (
                <div>
                    <h1>FOO</h1>
                </div>
            )
        } else {
            return (
                <StyledNote>
                    <h1>{note.title}</h1>
                    <h4>{note.description}</h4>
                    <ReactMarkdown source={note.body} />
                    <button onClick={() => this.hideNote()}>All Notes</button>
                    <script src="https://myCDN.com/prism@v1.x/components/prism-core.min.js"></script>
                    <script src="https://myCDN.com/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
                </StyledNote>
            )
        }
    }
}