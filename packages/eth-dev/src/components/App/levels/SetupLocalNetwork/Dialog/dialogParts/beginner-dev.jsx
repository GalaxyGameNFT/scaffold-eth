import React from 'react'
import { Button } from '../../../../gameItems/components'
import { SpeakerLeft } from '../components'
import { enrichDialog } from '../helpers'

export const DIALOG_PATH_ID = 'intro/beginner-dev'

const dialog = [
  {
    hasChoices: true,
    component: ({ actions }) => (
      <>
        <SpeakerLeft
          text={`Not to worry, not to worry - I've got you covered. May I suggest that you head over to our dear friends at cryptozombies.io`}
        />
        <a href='https://cryptozombies.io'>
          <Button id='cryptozombies-io'>Check out cryptozombies.io</Button>
        </a>
      </>
    )
  }
]

const enrichedDialog = enrichDialog(dialog, DIALOG_PATH_ID)

export default enrichedDialog