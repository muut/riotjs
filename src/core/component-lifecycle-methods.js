import {
  ON_BEFORE_MOUNT_KEY,
  ON_BEFORE_UNMOUNT_KEY,
  ON_BEFORE_UPDATE_KEY,
  ON_MOUNTED_KEY,
  ON_UNMOUNTED_KEY,
  ON_UPDATED_KEY,
  SHOULD_UPDATE_KEY
} from '@riotjs/util/constants'
import {noop} from '@riotjs/util/functions'

export const COMPONENT_LIFECYCLE_METHODS = Object.freeze({
  [SHOULD_UPDATE_KEY]: noop,
  [ON_BEFORE_MOUNT_KEY]: noop,
  [ON_MOUNTED_KEY]: noop,
  [ON_BEFORE_UPDATE_KEY]: noop,
  [ON_UPDATED_KEY]: noop,
  [ON_BEFORE_UNMOUNT_KEY]: noop,
  [ON_UNMOUNTED_KEY]: noop
})
