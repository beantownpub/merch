import React from 'react'
import { ContentContainer } from './container.js'
import { ContactBeantown } from '../contact/index.js'
import { config } from '../../utils/main.js'
import { sendEvent } from '../kafka/index.js'
const STATIC_PATH = `${config.urls.static}/img/slider`

const photoStyles = {
  padding: "1rem",
  display: "flex"
}

const galleryStyles = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  margin: "auto"
}

const imgStyles = {
  maxWidth: "250px",
  borderRadius: "6px"
}

const PhotoGallery = (props) => {
  const renderItems = (items) => {
    const galleryPhotos = []
    let cnt = 0
    for (const item of Object(items)) {
      galleryPhotos.push(
        <div style={photoStyles} key={cnt}><img style={imgStyles} src={`${STATIC_PATH}/${item}`}  alt={item} /></div>
      )
      cnt++
    }
    return (
      <div style={galleryStyles}>
        {galleryPhotos}
      </div>
    )
  }
  return (
    <ContentContainer margin="auto">
      {renderItems(props.images)}
    </ContentContainer>
  )
}

const images = [
  "bt_pool_tables.jpeg",
  "bt_private_event_1.jpeg",
  "bt_private_event_pt2.jpeg",
  "bt_private_event_pt4.jpeg",
  "bt_private_event_2.jpeg",
  "elisha_brown_room.jpeg",
  "elisha_brown_room2.jpeg"
]

export const PrivateParties = () => {
  window.addEventListener('click', (event) => {
    sendEvent(event)
  })
  return (
    <ContentContainer  
      articleMargin="1rem auto"
      margin="15% auto 1% auto"
    >
      <h1>Private Parties</h1>
      <article id="privatePartiesArticle">
      Make your next private event a memorable one. Beantown Pub offers a variety of spaces that are perfect for accomadating small gatherings
      or corporate events. Choose from spaces with single, multiple, or no pool tables. Our private event menu offers a variety of freshly
      prepared delicious appetizers all the way up to a full buffet with several entrees.
      </article>
      <ContactBeantown/>
      <PhotoGallery images={images} />
    </ContentContainer>
  )
}
