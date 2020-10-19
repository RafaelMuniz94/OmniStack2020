import {container} from 'tsyringe'
import IHashProvider from '@users/providers/HashProvider/Models/IHashProvider'
import BCryptHashProvider from '@users/providers/HashProvider/Implementations/BCryptHashProvider'

container.registerSingleton<IHashProvider>('HashProvider',BCryptHashProvider)