import { useCallback, useState } from 'react'
import { useMilestonesContext } from '../Milestones/MilestonesProvider'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from '@mui/material'

import { v4 as uuidv4 } from 'uuid'

type Props = {
  onClose: () => void
}

const MAX_WIDTH = 'md'

const AddMilestoneModal = ({ onClose }: Props) => {
  const { addMilestone } = useMilestonesContext()

  const [title, setTitle] = useState<string>('')
  //const [date, setDate] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  //const [tags, setTags] = useState<Tag[]>([])
  //const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const onSave = useCallback(() => {
    if (!title) {
      console.log('Please fill in all required fields')
      return
    }
    addMilestone({
      id: uuidv4(),
      title,
      date: new Date().toISOString(),
      description,
    })
    onClose()
  }, [addMilestone, description, onClose, title])

  return (
    <Dialog fullWidth maxWidth={MAX_WIDTH} open onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin='dense'
          id='title'
          name='title'
          label='Milestone Title'
          fullWidth
          variant='standard'
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          minRows={3}
          placeholder='Description'
          style={{ width: '100%' }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save Milestone</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddMilestoneModal
