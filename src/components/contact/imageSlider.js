import React from 'react'
import ImageSlider from '../imageSliders/main.js'

const images = [
  "bt_pool_tables.jpeg",
  "bt_private_event_pt2.jpeg",
  "bt_private_event_pt4.jpeg",
  "elisha_brown_room.jpeg",
  "elisha_brown_room2.jpeg"
]

export const PartiesSlider = () => {
  return (
    <ImageSlider images={images} imagePath="/images/imgSlider"/>
  )
}
