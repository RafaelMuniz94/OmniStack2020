# [0.0.39] - 02/11/2020
## Month Availability Service
## Month Availability test
## Day Availability Service
## Day Availability Test
## Appointments creation improvments

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_4/ReadME.md
        modified:   Semana_4/node/src/modules/appointments/Dtos/ICreateAppointmentsDTO.ts
        new file:   Semana_4/node/src/modules/appointments/Dtos/IFindAllInDayFromProviderDTO.ts
        new file:   Semana_4/node/src/modules/appointments/Dtos/IFindAllInMonthFromProviderDTO.ts
        modified:   Semana_4/node/src/modules/appointments/infra/Typeorm/entities/Appointments.ts
        modified:   Semana_4/node/src/modules/appointments/infra/Typeorm/repositories/AppointmentsRepository.ts
        modified:   Semana_4/node/src/modules/appointments/infra/controllers/AppointmentController.ts
        new file:   Semana_4/node/src/modules/appointments/infra/controllers/ProviderDailyAvailabilityController.ts
        new file:   Semana_4/node/src/modules/appointments/infra/controllers/ProviderMonthAvailabilityController.ts
        new file:   Semana_4/node/src/modules/appointments/infra/controllers/ProvidersController.ts
        new file:   Semana_4/node/src/modules/appointments/infra/http/routes/providers.routes.ts
        modified:   Semana_4/node/src/modules/appointments/repositories/IAppointmentsRepository.ts
        modified:   Semana_4/node/src/modules/appointments/repositories/fakes/fakeAppointmentsRepository.ts
        deleted:    Semana_4/node/src/modules/appointments/services/CreateAppointmentService.spec.ts
        modified:   Semana_4/node/src/modules/appointments/services/CreateAppointmentService.ts
        new file:   Semana_4/node/src/modules/appointments/services/ListProviderDayAvailabilityService.ts
        new file:   Semana_4/node/src/modules/appointments/services/ListProviderMonthAvailabilityService.ts
        new file:   Semana_4/node/src/modules/appointments/services/ListProvidersService.ts
        new file:   Semana_4/node/src/modules/appointments/services/tests/CreateAppointmentService.spec.ts
        new file:   Semana_4/node/src/modules/appointments/services/tests/ListProviderDayAvailabilityService.spec.ts
        new file:   Semana_4/node/src/modules/appointments/services/tests/ListProviderMonthAvailabilityService.spec.ts
        new file:   Semana_4/node/src/modules/appointments/services/tests/ListProvidersService.spec.ts
        new file:   Semana_4/node/src/modules/users/Dtos/IFindAllProvidersDTO.ts
        modified:   Semana_4/node/src/modules/users/infra/Typeorm/repositories/UsersRepository.ts
        modified:   Semana_4/node/src/modules/users/infra/http/controllers/UserController.ts
        modified:   Semana_4/node/src/modules/users/repositories/IUsersRepository.ts
        modified:   Semana_4/node/src/modules/users/repositories/fakes/FakeUsersRepository.ts
        modified:   Semana_4/node/src/modules/users/services/tests/FindAllUsersService.spec.ts
        new file:   Semana_4/node/src/shared/infra/Typeorm/migrations/1604352613405-AddUserIdToAppointments.ts
        modified:   Semana_4/node/src/shared/infra/http/routes/index.ts

---

# [0.0.38] - 30/10/2020
## Profile Route
## Show Profile Service
## Show Profile Test
## Profile Controller

**Changed Files**

        modified:   Changelog.md
        new file:   Semana_4/node/src/modules/users/infra/http/controllers/ProfileController.ts
        new file:   Semana_4/node/src/modules/users/infra/http/routes/profile.routes.ts
        new file:   Semana_4/node/src/modules/users/services/ShowProfileService.ts
        new file:   Semana_4/node/src/modules/users/services/tests/FindAllUsersService.spec.ts
        new file:   Semana_4/node/src/modules/users/services/tests/ShowProfileService.spec.ts
        modified:   Semana_4/node/src/shared/infra/http/routes/index.ts

---

# [0.0.37] - 26/10/2020
## User profile update
## Email Template with template engine
## Test Fixes

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_4/ReadME.md
        modified:   Semana_4/node/src/modules/users/repositories/fakes/FakeUsersRepository.ts
        modified:   Semana_4/node/src/modules/users/services/SendForgotPasswordEmailService.ts
        new file:   Semana_4/node/src/modules/users/services/UpdateUserProfileService.ts
        new file:   Semana_4/node/src/modules/users/services/tests/UpdateUserProfileService.spec.ts
        new file:   Semana_4/node/src/modules/users/views/forgot_passwords.hbs
        modified:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts
        modified:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts
        modified:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/implementations/HandleBarsMailTemplateProvider.ts
        
---

# [0.0.36] - 24/10/2020
## Email template provider
## Email template Interface
## Sending email with nodemailer dependency

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_4/node/package.json
        modified:   Semana_4/node/src/modules/users/services/SendForgotPasswordEmailService.ts
        new file:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts
        new file:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/implementations/HandleBarsMailTemplateProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/SendEmailProvider/dtos/ISendEmailDTO.ts
        modified:   Semana_4/node/src/shared/container/providers/SendEmailProvider/fakes/FakeMailProvider.ts
        modified:   Semana_4/node/src/shared/container/providers/SendEmailProvider/implementations/EtherealMailProvider.ts
        modified:   Semana_4/node/src/shared/container/providers/SendEmailProvider/models/IMailProvider.ts
        modified:   Semana_4/node/src/shared/container/providers/index.ts
        modified:   Semana_4/node/yarn-error.log
        modified:   Semana_4/node/yarn.lock

---

# [0.0.35] - 24/10/2020
## Finished unit Test
## Reset Password service
## Send email service
## User Token Repository
## User Token Migration
## Ethereal mail Provider integration

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_4/ReadME.md
        modified:   Semana_4/node/ormconfig.json
        modified:   Semana_4/node/package.json
        new file:   Semana_4/node/src/modules/users/infra/Typeorm/entities/UserToken.ts
        modified:   Semana_4/node/src/modules/users/infra/Typeorm/repositories/UsersRepository.ts
        new file:   Semana_4/node/src/modules/users/infra/Typeorm/repositories/UsersTokenRepository.ts
        new file:   Semana_4/node/src/modules/users/infra/http/controllers/ForgotPasswordController.ts
        new file:   Semana_4/node/src/modules/users/infra/http/controllers/ResetPasswordController.ts
        modified:   Semana_4/node/src/modules/users/infra/http/controllers/UserController.ts
        new file:   Semana_4/node/src/modules/users/infra/http/routes/password.routes.ts
        modified:   Semana_4/node/src/modules/users/infra/http/routes/users.routes.ts
        new file:   Semana_4/node/src/modules/users/repositories/IUserTokenRepository.ts
        modified:   Semana_4/node/src/modules/users/repositories/IUsersRepository.ts
        new file:   Semana_4/node/src/modules/users/repositories/fakes/FakeUserTokenRepository.ts
        new file:   Semana_4/node/src/modules/users/services/FindAllUsersService.ts
        new file:   Semana_4/node/src/modules/users/services/ResetPasswordService.ts
        new file:   Semana_4/node/src/modules/users/services/SendForgotPasswordEmailService.ts
        new file:   Semana_4/node/src/modules/users/services/tests/ResetPasswordService.spec.ts
        new file:   Semana_4/node/src/modules/users/services/tests/SendForgotPasswordEmailService.spec.ts
        modified:   Semana_4/node/src/shared/container/index.ts
        new file:   Semana_4/node/src/shared/container/providers/SendEmailProvider/fakes/FakeMailProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/SendEmailProvider/implementations/EtherealMailProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/SendEmailProvider/models/IMailProvider.ts
        modified:   Semana_4/node/src/shared/container/providers/index.ts
        new file:   Semana_4/node/src/shared/infra/Typeorm/migrations/1603566352136-CreateUserTokens.ts
        new file:   Semana_4/node/src/shared/infra/http/middlewares/logRoutes.ts
        modified:   Semana_4/node/src/shared/infra/http/routes/index.ts
        modified:   Semana_4/node/src/shared/infra/http/server.ts
        modified:   Semana_4/node/yarn.lock

---

# [0.0.34] - 17/10/2020
## User Services Tests
## User Providers
## Readme with Application Rules

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        new file:   Semana_4/ReadME.md
        new file:   Semana_4/node/jest.config.js
        modified:   Semana_4/node/package.json
        modified:   Semana_4/node/src/config/upload.ts
        new file:   Semana_4/node/src/modules/appointments/repositories/fakes/fakeAppointmentsRepository.ts
        new file:   Semana_4/node/src/modules/appointments/services/CreateAppointmentService.spec.ts
        new file:   Semana_4/node/src/modules/users/providers/HashProvider/Fakes/FakeHashProvider.ts
        new file:   Semana_4/node/src/modules/users/providers/HashProvider/Implementations/BCryptHashProvider.ts
        new file:   Semana_4/node/src/modules/users/providers/HashProvider/Models/IHashProvider.ts
        new file:   Semana_4/node/src/modules/users/providers/index.ts
        new file:   Semana_4/node/src/modules/users/repositories/fakes/FakeUsersRepository.ts
        modified:   Semana_4/node/src/modules/users/services/AuthenticateUserService.ts
        modified:   Semana_4/node/src/modules/users/services/CreateUserService.ts
        modified:   Semana_4/node/src/modules/users/services/UpdateUserAvatarService.ts
        new file:   Semana_4/node/src/modules/users/services/tests/AuthenticateUserService.spec.ts
        new file:   Semana_4/node/src/modules/users/services/tests/CreateUserService.spec.ts
        new file:   Semana_4/node/src/modules/users/services/tests/UpdateUserAvatarService.spec.ts
        modified:   Semana_4/node/src/shared/container/index.ts
        new file:   Semana_4/node/src/shared/container/providers/StorageProviders/fakes/FakeStorageProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/StorageProviders/implementations/DiskStorageProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/StorageProviders/models/IStorageProvider.ts
        new file:   Semana_4/node/src/shared/container/providers/index.ts
        modified:   Semana_4/node/tsconfig.json
        modified:   Semana_4/node/yarn.lock

---

# [0.0.33] - 15/10/2020
## Dependency Injection

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_4/node/package.json
        modified:   Semana_4/node/src/modules/appointments/infra/http/routes/appointments.routes.ts
        modified:   Semana_4/node/src/modules/appointments/services/CreateAppointmentService.ts
        modified:   Semana_4/node/src/modules/users/infra/Typeorm/repositories/UsersRepository.ts
        modified:   Semana_4/node/src/modules/users/infra/http/routes/sessions.routes.ts
        modified:   Semana_4/node/src/modules/users/infra/http/routes/users.routes.ts
        modified:   Semana_4/node/src/modules/users/services/AuthenticateUserService.ts
        modified:   Semana_4/node/src/modules/users/services/CreateUserService.ts
        modified:   Semana_4/node/src/modules/users/services/UpdateUserAvatarService.ts
        modified:   Semana_4/node/src/shared/infra/http/server.ts
        modified:   Semana_4/node/yarn-error.log
        modified:   Semana_4/node/yarn.lock
        

---

# [0.0.32] - 04/10/2020
## Week 2 App change to fit DDD patterns

**Changed Files**

        modified:   Changelog.md
        new file:   Semana_2/Arquitetura.txt
        new file:   Semana_4/Arquitetura.txt
        new file:   Semana_4/node/ormconfig.json
        new file:   Semana_4/node/package.json
        new file:   Semana_4/node/src/@types/express.d.ts
        new file:   Semana_4/node/src/config/auth.ts
        new file:   Semana_4/node/src/config/upload.ts
        new file:   Semana_4/node/src/modules/appointments/Dtos/ICreateAppointmentsDTO.ts
        new file:   Semana_4/node/src/modules/appointments/infra/Typeorm/entities/Appointments.ts
        new file:   Semana_4/node/src/modules/appointments/infra/Typeorm/repositories/AppointmentsRepository.ts
        new file:   Semana_4/node/src/modules/appointments/infra/http/routes/appointments.routes.ts
        new file:   Semana_4/node/src/modules/appointments/repositories/IAppointmentsRepository.ts
        new file:   Semana_4/node/src/modules/appointments/services/CreateAppointmentService.ts
        new file:   Semana_4/node/src/modules/users/Dtos/ICreateUserDTO.ts
        new file:   Semana_4/node/src/modules/users/infra/Typeorm/entities/Users.ts
        new file:   Semana_4/node/src/modules/users/infra/Typeorm/repositories/UsersRepository.ts
        new file:   Semana_4/node/src/modules/users/infra/http/middlewares/ensureAuthenticated.ts
        new file:   Semana_4/node/src/modules/users/infra/http/routes/sessions.routes.ts
        new file:   Semana_4/node/src/modules/users/infra/http/routes/users.routes.ts
        new file:   Semana_4/node/src/modules/users/repositories/IUsersRepository.ts
        new file:   Semana_4/node/src/modules/users/services/AuthenticateUserService.ts
        new file:   Semana_4/node/src/modules/users/services/CreateUserService.ts
        new file:   Semana_4/node/src/modules/users/services/UpdateUserAvatarService.ts
        new file:   Semana_4/node/src/shared/errors/AppError.ts
        new file:   Semana_4/node/src/shared/infra/Info.txt
        new file:   Semana_4/node/src/shared/infra/Typeorm/index.ts
        new file:   Semana_4/node/src/shared/infra/Typeorm/migrations/1598819008070-CreateAppointments.ts
        new file:   Semana_4/node/src/shared/infra/Typeorm/migrations/1598917118367-Users.ts
        new file:   Semana_4/node/src/shared/infra/Typeorm/migrations/1598920821694-AlterProvidertoProviderID.ts
        new file:   Semana_4/node/src/shared/infra/Typeorm/migrations/1599010958145-AddAvatarFieldsToUsers.ts
        new file:   Semana_4/node/src/shared/infra/http/routes/index.ts
        new file:   Semana_4/node/src/shared/infra/http/server.ts
        new file:   Semana_4/node/tmp/.gitkeep
        new file:   Semana_4/node/tmp/9ccad2a57b39ee5a2543-avatar.jpg
        new file:   Semana_4/node/tsconfig.json
        new file:   Semana_4/node/yarn copy.lock
        new file:   Semana_4/node/yarn-error.log
        new file:   Semana_4/node/yarn.lock


---

# [0.0.31] - 29/09/2020
## Auth only routes
## Loading Screen
## App routes
## LogOut function on dashboard

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber-native/gobarberapp/src/hooks/auth.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/pages/Dashboard/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/pages/Dashboard/styles.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/routes/app.routes.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/routes/auth.routes.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/routes/index.tsx

---

# [0.0.30] - 28/09/2020
## API call with Axios
## Form Field validations
## Auth Hook
## Auth Context
## Auth Provider
## SignIn functional
## Validation Errors Function

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber-native/gobarberapp/ios/Podfile.lock
        modified:   Semana_3/gobarber-native/gobarberapp/package.json
        modified:   Semana_3/gobarber-native/gobarberapp/src/App.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/Components/Input/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/Components/Input/styles.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/hooks/auth.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/hooks/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignUp/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/services/api.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/utils/getValidationErrors.ts
        modified:   Semana_3/gobarber-native/gobarberapp/yarn.lock
        modified:   Semana_3/gobarber/src/hooks/AuthContext.tsx

---

# [0.0.29] - 23/09/2020
## Imperative Hook insert on Input
## Unform dependecy
## Input accessibility improved
## Input focus stylization

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber-native/gobarberapp/package.json
        modified:   Semana_3/gobarber-native/gobarberapp/src/Components/Input/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/Components/Input/styles.ts
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/styles.ts
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignUp/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/yarn.lock
        
---

# [0.0.28] - 22/09/2020
## LogIn page defined
## Create Account page defined
## Button Component created
## Input Component created
## Functional Route Inplementation

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber-native/gobarberapp/android/build.gradle
        modified:   Semana_3/gobarber-native/gobarberapp/ios/Podfile.lock
        modified:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp.xcodeproj/project.pbxproj
        modified:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/Info.plist
        modified:   Semana_3/gobarber-native/gobarberapp/package.json
        modified:   Semana_3/gobarber-native/gobarberapp/react-native.config.js
        new file:   Semana_3/gobarber-native/gobarberapp/src/Components/Button/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/Components/Button/styles.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/Components/Input/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/Components/Input/styles.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/assets/fonts.ts
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/styles.ts
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignUp/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/src/pages/SignUp/styles.ts
        modified:   Semana_3/gobarber-native/gobarberapp/src/routes/index.tsx
        modified:   Semana_3/gobarber-native/gobarberapp/yarn.lock

---

# [0.0.27] - 21/09/2020
## React-Native project created
## StatusBar configuration
## Pod Dependecies Inclusion
## Image configuration
## Font inclusion

**Changed Files**

        modified:   Changelog.md
        new file:   Semana_3/gobarber-native/gobarberapp/.buckconfig
        new file:   Semana_3/gobarber-native/gobarberapp/.gitattributes
        new file:   Semana_3/gobarber-native/gobarberapp/.gitignore
        new file:   Semana_3/gobarber-native/gobarberapp/.watchmanconfig
        new file:   Semana_3/gobarber-native/gobarberapp/Assets/fonts/RobotoSlab-Medium.ttf
        new file:   Semana_3/gobarber-native/gobarberapp/Assets/fonts/RobotoSlab-Regular.ttf
        new file:   Semana_3/gobarber-native/gobarberapp/__tests__/App-test.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/_BUCK
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/build.gradle
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/build_defs.bzl
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/debug.keystore
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/proguard-rules.pro
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/debug/AndroidManifest.xml
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/debug/java/com/gobarberapp/ReactNativeFlipper.java
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/AndroidManifest.xml
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/assets/fonts/RobotoSlab-Medium.ttf
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/assets/fonts/RobotoSlab-Regular.ttf
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/java/com/gobarberapp/MainActivity.java
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/java/com/gobarberapp/MainApplication.java
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/values/strings.xml
        new file:   Semana_3/gobarber-native/gobarberapp/android/app/src/main/res/values/styles.xml
        new file:   Semana_3/gobarber-native/gobarberapp/android/build.gradle
        new file:   Semana_3/gobarber-native/gobarberapp/android/gradle.properties
        new file:   Semana_3/gobarber-native/gobarberapp/android/gradle/wrapper/gradle-wrapper.jar
        new file:   Semana_3/gobarber-native/gobarberapp/android/gradle/wrapper/gradle-wrapper.properties
        new file:   Semana_3/gobarber-native/gobarberapp/android/gradlew
        new file:   Semana_3/gobarber-native/gobarberapp/android/gradlew.bat
        new file:   Semana_3/gobarber-native/gobarberapp/android/settings.gradle
        new file:   Semana_3/gobarber-native/gobarberapp/app.json
        new file:   Semana_3/gobarber-native/gobarberapp/babel.config.js
        new file:   Semana_3/gobarber-native/gobarberapp/index.js
        new file:   Semana_3/gobarber-native/gobarberapp/ios/Podfile
        new file:   Semana_3/gobarber-native/gobarberapp/ios/Podfile.lock
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp-tvOS/Info.plist
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp-tvOSTests/Info.plist
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp.xcodeproj/project.pbxproj
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp.xcodeproj/xcshareddata/xcschemes/gobarberapp-tvOS.xcscheme
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp.xcodeproj/xcshareddata/xcschemes/gobarberapp.xcscheme
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp.xcworkspace/contents.xcworkspacedata
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/AppDelegate.h
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/AppDelegate.m
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/Images.xcassets/AppIcon.appiconset/Contents.json
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/Images.xcassets/Contents.json
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/Info.plist
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/LaunchScreen.storyboard
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberapp/main.m
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberappTests/Info.plist
        new file:   Semana_3/gobarber-native/gobarberapp/ios/gobarberappTests/gobarberappTests.m
        new file:   Semana_3/gobarber-native/gobarberapp/metro.config.js
        new file:   Semana_3/gobarber-native/gobarberapp/package.json
        new file:   Semana_3/gobarber-native/gobarberapp/react-native.config.js
        new file:   Semana_3/gobarber-native/gobarberapp/src/@types/index.d.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/App.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/assets/logo.png
        new file:   Semana_3/gobarber-native/gobarberapp/src/assets/logo@2x.png
        new file:   Semana_3/gobarber-native/gobarberapp/src/assets/logo@3x.png
        new file:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/pages/SignIn/styles.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/pages/SignUp/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/src/pages/SignUp/styles.ts
        new file:   Semana_3/gobarber-native/gobarberapp/src/routes/index.tsx
        new file:   Semana_3/gobarber-native/gobarberapp/tsconfig.json
        new file:   Semana_3/gobarber-native/gobarberapp/yarn.lock

---

# [0.0.26] - 15/09/2020
## Add React-Spring dependecy
## Add Toast Transition
## Add Dashboard Route
## Create Route component
## Routes Redirect
## Basic React App finished

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber/package.json
        modified:   Semana_3/gobarber/public/index.html
        modified:   Semana_3/gobarber/src/App.tsx
        modified:   Semana_3/gobarber/src/components/ToastContainer/Toast/index.tsx
        modified:   Semana_3/gobarber/src/components/ToastContainer/Toast/styles.tsx
        modified:   Semana_3/gobarber/src/components/ToastContainer/index.tsx
        modified:   Semana_3/gobarber/src/hooks/ToastContext.tsx
        new file:   Semana_3/gobarber/src/pages/Dashboard/index.tsx
        new file:   Semana_3/gobarber/src/pages/Dashboard/styles.tsx
        modified:   Semana_3/gobarber/src/pages/SignIn/index.tsx
        modified:   Semana_3/gobarber/src/pages/SignIn/styles.ts
        modified:   Semana_3/gobarber/src/pages/SignUp/index.tsx
        modified:   Semana_3/gobarber/src/pages/SignUp/styles.ts
        new file:   Semana_3/gobarber/src/routes/Route.tsx
        new file:   Semana_3/gobarber/src/routes/index.tsx
        modified:   Semana_3/gobarber/yarn.lock

---

# [0.0.25] - 15/09/2020
## App Provider
## Toast Provider
## Toast notification
## Toast self remove

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber/package.json
        modified:   Semana_3/gobarber/src/App.tsx
        new file:   Semana_3/gobarber/src/components/ToastContainer/Toast/index.tsx
        new file:   Semana_3/gobarber/src/components/ToastContainer/Toast/styles.tsx
        new file:   Semana_3/gobarber/src/components/ToastContainer/index.tsx
        new file:   Semana_3/gobarber/src/components/ToastContainer/styles.ts
        renamed:    Semana_3/gobarber/src/context/AuthContext.tsx -> Semana_3/gobarber/src/hooks/AuthContext.tsx
        new file:   Semana_3/gobarber/src/hooks/ToastContext.tsx
        new file:   Semana_3/gobarber/src/hooks/index.tsx
        modified:   Semana_3/gobarber/src/pages/SignIn/index.tsx
        modified:   Semana_3/gobarber/yarn.lock

---

# [0.0.24] - 15/09/2020
## CORS configuration at API
## API Call on React APP
## Context API Use
## LocalStorage to save api Content

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_2/node/package.json
        modified:   Semana_2/node/src/server.ts
        modified:   Semana_2/node/yarn.lock
        modified:   Semana_3/gobarber/package.json
        modified:   Semana_3/gobarber/src/App.tsx
        new file:   Semana_3/gobarber/src/context/AuthContext.tsx
        modified:   Semana_3/gobarber/src/pages/SignIn/index.tsx
        new file:   Semana_3/gobarber/src/services/api.ts
        modified:   Semana_3/gobarber/yarn.lock
        
---

# [0.0.23] - 15/09/2020
## Changelog Typo Fix
## Logon Screen fixes
## Logon Screen fields Validation
## Logon Screen fields Dependencies Inclusion

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber/src/App.tsx
        modified:   Semana_3/gobarber/src/pages/SignIn/index.tsx

---

# [0.0.22] - 14/09/2020
## React Hooks - Unform
## Tooltips
## Error Icon Component
## Yup Dependency for field validation

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/gobarber/package.json
        modified:   Semana_3/gobarber/src/App.tsx
        new file:   Semana_3/gobarber/src/Assets/createAccountBackground.png
        new file:   Semana_3/gobarber/src/components/ErrorCircle/index.tsx
        new file:   Semana_3/gobarber/src/components/ErrorCircle/styles.ts
        modified:   Semana_3/gobarber/src/components/Input/index.tsx
        modified:   Semana_3/gobarber/src/components/Input/styles.ts
        new file:   Semana_3/gobarber/src/components/ToolTip/index.tsx
        new file:   Semana_3/gobarber/src/components/ToolTip/styles.ts
        modified:   Semana_3/gobarber/src/pages/SignIn/index.tsx
        new file:   Semana_3/gobarber/src/pages/SignUp/index.tsx
        new file:   Semana_3/gobarber/src/pages/SignUp/styles.ts
        new file:   Semana_3/gobarber/src/utils/getValidationErrors.ts
        modified:   Semana_3/gobarber/yarn.lock
---

# [0.0.21] - 10/09/2020
## GoBarber web project Created
## Global components
## Components Interface

**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/githubrepo/src/pages/Dashboard/index.tsx
        new file:   Semana_3/gobarber/.gitignore
        new file:   Semana_3/gobarber/README.md
        new file:   Semana_3/gobarber/package.json
        new file:   Semana_3/gobarber/public/index.html
        new file:   Semana_3/gobarber/public/robots.txt
        new file:   Semana_3/gobarber/src/App.tsx
        new file:   Semana_3/gobarber/src/Assets/logo.svg
        new file:   Semana_3/gobarber/src/Assets/sign-in-background.png
        new file:   Semana_3/gobarber/src/components/Button/index.tsx
        new file:   Semana_3/gobarber/src/components/Button/styles.ts
        new file:   Semana_3/gobarber/src/components/Input/index.tsx
        new file:   Semana_3/gobarber/src/components/Input/styles.ts
        new file:   Semana_3/gobarber/src/index.tsx
        new file:   Semana_3/gobarber/src/pages/SignIn/index.tsx
        new file:   Semana_3/gobarber/src/pages/SignIn/styles.ts
        new file:   Semana_3/gobarber/src/react-app-env.d.ts
        new file:   Semana_3/gobarber/src/setupTests.ts
        new file:   Semana_3/gobarber/src/styles/global.ts
        new file:   Semana_3/gobarber/tsconfig.json
        new file:   Semana_3/gobarber/yarn.lock
        new file:   package.json
        new file:   yarn.lock

---

# [0.0.20] - 07/09/2020
## LocalStorage
## Params between Routes with useRouteMatch
## Link beside anchor to prevent reload
## UseState initial state
## External link redirect 


**Changed Files**

        modified:   Changelog.md
        modified:   Semana_3/githubrepo/src/Styles/global.ts
        modified:   Semana_3/githubrepo/src/pages/Dashboard/index.tsx
        modified:   Semana_3/githubrepo/src/pages/Repository/index.tsx
        new file:   Semana_3/githubrepo/src/pages/Repository/styles.ts
        modified:   Semana_3/githubrepo/src/routes/index.tsx

---


# [0.0.19] - 07/09/2020
## React Router
## Fragment
## Styled Components
## Error Handling
## React IF
## Api access
## Image Use
## Font Use
## Global Style

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        modified:   README.md
        modified:   Semana_2/node/ormconfig.json
        new file:   Semana_2/node/src/config/upload.ts
        new file:   Semana_3/githubrepo/.gitignore
        new file:   Semana_3/githubrepo/package.json
        new file:   Semana_3/githubrepo/public/favicon.ico
        new file:   Semana_3/githubrepo/public/index.html
        new file:   Semana_3/githubrepo/public/robots.txt
        new file:   Semana_3/githubrepo/src/App.tsx
        new file:   Semana_3/githubrepo/src/Assets/background.svg
        new file:   Semana_3/githubrepo/src/Assets/page_logo.svg
        new file:   Semana_3/githubrepo/src/Services/api.ts
        new file:   Semana_3/githubrepo/src/Styles/global.ts
        new file:   Semana_3/githubrepo/src/index.tsx
        new file:   Semana_3/githubrepo/src/pages/Dashboard/index.tsx
        new file:   Semana_3/githubrepo/src/pages/Dashboard/styles.ts
        new file:   Semana_3/githubrepo/src/pages/Repository/index.tsx
        new file:   Semana_3/githubrepo/src/react-app-env.d.ts
        new file:   Semana_3/githubrepo/src/routes/index.tsx
        new file:   Semana_3/githubrepo/src/setupTests.ts
        new file:   Semana_3/githubrepo/tsconfig.json
        new file:   Semana_3/githubrepo/yarn.lock

---

# [0.0.18] - 03/09/2020
## Global Exception Handler
## Static files Route
## Application Error
## Router Errors Handler Remove

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        modified:   Semana_2/node/package.json
        new file:   Semana_2/node/src/errors/AppError.ts
        modified:   Semana_2/node/src/middlewares/ensureAuthenticated.ts
        modified:   Semana_2/node/src/routes/appointments.routes.ts
        modified:   Semana_2/node/src/routes/sessions.routes.ts
        modified:   Semana_2/node/src/routes/users.routes.ts
        modified:   Semana_2/node/src/server.ts
        modified:   Semana_2/node/src/services/AuthenticateUserService.ts
        modified:   Semana_2/node/src/services/CreateAppointmentService.ts
        modified:   Semana_2/node/src/services/CreateUserService.ts
        modified:   Semana_2/node/src/services/UpdateUserAvatarService.ts
        modified:   Semana_2/node/yarn.lock

---

# [0.0.17] - 02/09/2020
## File Upload
## Multer Config
## TMP folder to add image to local storage
## Folder structure rename

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        deleted:    Semana 2/node/src/routes/users.routes.ts
        renamed:    Semana 1/node/package.json -> Semana_1/node/package.json
        renamed:    Semana 1/node/src/index.js -> Semana_1/node/src/index.js
        renamed:    Semana 1/node/yarn.lock -> Semana_1/node/yarn.lock
        renamed:    Semana 1/react/babel.config.js -> Semana_1/react/babel.config.js
        renamed:    Semana 1/react/package.json -> Semana_1/react/package.json
        renamed:    Semana 1/react/public/index.html -> Semana_1/react/public/index.html
        renamed:    Semana 1/react/public/script.js -> Semana_1/react/public/script.js
        renamed:    Semana 1/react/src/App.js -> Semana_1/react/src/App.js
        renamed:    Semana 1/react/src/Assets/background.png -> Semana_1/react/src/Assets/background.png
        renamed:    Semana 1/react/src/CSS/App.css -> Semana_1/react/src/CSS/App.css
        renamed:    Semana 1/react/src/Components/Body.js -> Semana_1/react/src/Components/Body.js
        renamed:    Semana 1/react/src/Components/Footer.js -> Semana_1/react/src/Components/Footer.js
        renamed:    Semana 1/react/src/Components/Header.js -> Semana_1/react/src/Components/Header.js
        renamed:    Semana 1/react/src/index.js -> Semana_1/react/src/index.js
        renamed:    Semana 1/react/src/services/api.js -> Semana_1/react/src/services/api.js
        renamed:    Semana 1/react/src/time.js -> Semana_1/react/src/time.js
        renamed:    Semana 1/react/webpack.config.js -> Semana_1/react/webpack.config.js
        renamed:    Semana 1/react/yarn-error.log -> Semana_1/react/yarn-error.log
        renamed:    Semana 1/react/yarn.lock -> Semana_1/react/yarn.lock
        renamed:    Semana 1/reactNative/.buckconfig -> Semana_1/reactNative/.buckconfig
        renamed:    Semana 1/reactNative/.flowconfig -> Semana_1/reactNative/.flowconfig
        renamed:    Semana 1/reactNative/.gitattributes -> Semana_1/reactNative/.gitattributes
        renamed:    Semana 1/reactNative/.gitignore -> Semana_1/reactNative/.gitignore
        renamed:    Semana 1/reactNative/.watchmanconfig -> Semana_1/reactNative/.watchmanconfig
        renamed:    Semana 1/reactNative/App.js -> Semana_1/reactNative/App.js
        renamed:    Semana 1/reactNative/__tests__/App-test.js -> Semana_1/reactNative/__tests__/App-test.js
        renamed:    Semana 1/reactNative/android/app/BUCK -> Semana_1/reactNative/android/app/BUCK
        renamed:    Semana 1/reactNative/android/app/build.gradle -> Semana_1/reactNative/android/app/build.gradle
        renamed:    Semana 1/reactNative/android/app/build_defs.bzl -> Semana_1/reactNative/android/app/build_defs.bzl
        renamed:    Semana 1/reactNative/android/app/debug.keystore -> Semana_1/reactNative/android/app/debug.keystore
        renamed:    Semana 1/reactNative/android/app/proguard-rules.pro -> Semana_1/reactNative/android/app/proguard-rules.pro
        renamed:    Semana 1/reactNative/android/app/src/debug/AndroidManifest.xml -> Semana_1/reactNative/android/app/src/debug/AndroidManifest.xml
        renamed:    Semana 1/reactNative/android/app/src/debug/java/com/reactnative/ReactNativeFlipper.java -> Semana_1/reactNative/android/app/src/debug/java/com/reactnative/ReactNativeFlipper.java
        renamed:    Semana 1/reactNative/android/app/src/main/AndroidManifest.xml -> Semana_1/reactNative/android/app/src/main/AndroidManifest.xml
        renamed:    Semana 1/reactNative/android/app/src/main/java/com/reactnative/MainActivity.java -> Semana_1/reactNative/android/app/src/main/java/com/reactnative/MainActivity.java
        renamed:    Semana 1/reactNative/android/app/src/main/java/com/reactnative/MainApplication.java -> Semana_1/reactNative/android/app/src/main/java/com/reactnative/MainApplication.java
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png -> Semana_1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
        renamed:    Semana 1/reactNative/android/app/src/main/res/values/strings.xml -> Semana_1/reactNative/android/app/src/main/res/values/strings.xml
        renamed:    Semana 1/reactNative/android/app/src/main/res/values/styles.xml -> Semana_1/reactNative/android/app/src/main/res/values/styles.xml
        renamed:    Semana 1/reactNative/android/build.gradle -> Semana_1/reactNative/android/build.gradle
        renamed:    Semana 1/reactNative/android/gradle.properties -> Semana_1/reactNative/android/gradle.properties
        renamed:    Semana 1/reactNative/android/gradle/wrapper/gradle-wrapper.jar -> Semana_1/reactNative/android/gradle/wrapper/gradle-wrapper.jar
        renamed:    Semana 1/reactNative/android/gradle/wrapper/gradle-wrapper.properties -> Semana_1/reactNative/android/gradle/wrapper/gradle-wrapper.properties
        renamed:    Semana 1/reactNative/android/gradlew -> Semana_1/reactNative/android/gradlew
        renamed:    Semana 1/reactNative/android/gradlew.bat -> Semana_1/reactNative/android/gradlew.bat
        renamed:    Semana 1/reactNative/android/settings.gradle -> Semana_1/reactNative/android/settings.gradle
        renamed:    Semana 1/reactNative/app.json -> Semana_1/reactNative/app.json
        renamed:    Semana 1/reactNative/babel.config.js -> Semana_1/reactNative/babel.config.js
        renamed:    Semana 1/reactNative/index.js -> Semana_1/reactNative/index.js
        renamed:    Semana 1/reactNative/ios/Podfile -> Semana_1/reactNative/ios/Podfile
        renamed:    Semana 1/reactNative/ios/Podfile.lock -> Semana_1/reactNative/ios/Podfile.lock
        renamed:    Semana 1/reactNative/ios/reactNative-tvOS/Info.plist -> Semana_1/reactNative/ios/reactNative-tvOS/Info.plist
        renamed:    Semana 1/reactNative/ios/reactNative-tvOSTests/Info.plist -> Semana_1/reactNative/ios/reactNative-tvOSTests/Info.plist
        renamed:    Semana 1/reactNative/ios/reactNative.xcodeproj/project.pbxproj -> Semana_1/reactNative/ios/reactNative.xcodeproj/project.pbxproj
        renamed:    Semana 1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative-tvOS.xcscheme -> Semana_1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative-tvOS.xcscheme
        renamed:    Semana 1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative.xcscheme -> Semana_1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative.xcscheme
        renamed:    Semana 1/reactNative/ios/reactNative.xcworkspace/contents.xcworkspacedata -> Semana_1/reactNative/ios/reactNative.xcworkspace/contents.xcworkspacedata
        renamed:    Semana 1/reactNative/ios/reactNative/AppDelegate.h -> Semana_1/reactNative/ios/reactNative/AppDelegate.h
        renamed:    Semana 1/reactNative/ios/reactNative/AppDelegate.m -> Semana_1/reactNative/ios/reactNative/AppDelegate.m
        renamed:    Semana 1/reactNative/ios/reactNative/Images.xcassets/AppIcon.appiconset/Contents.json -> Semana_1/reactNative/ios/reactNative/Images.xcassets/AppIcon.appiconset/Contents.json
        renamed:    Semana 1/reactNative/ios/reactNative/Images.xcassets/Contents.json -> Semana_1/reactNative/ios/reactNative/Images.xcassets/Contents.json
        renamed:    Semana 1/reactNative/ios/reactNative/Info.plist -> Semana_1/reactNative/ios/reactNative/Info.plist
        renamed:    Semana 1/reactNative/ios/reactNative/LaunchScreen.storyboard -> Semana_1/reactNative/ios/reactNative/LaunchScreen.storyboard
        renamed:    Semana 1/reactNative/ios/reactNative/main.m -> Semana_1/reactNative/ios/reactNative/main.m
        renamed:    Semana 1/reactNative/ios/reactNativeTests/Info.plist -> Semana_1/reactNative/ios/reactNativeTests/Info.plist
        renamed:    Semana 1/reactNative/ios/reactNativeTests/reactNativeTests.m -> Semana_1/reactNative/ios/reactNativeTests/reactNativeTests.m
        renamed:    Semana 1/reactNative/metro.config.js -> Semana_1/reactNative/metro.config.js
        renamed:    Semana 1/reactNative/package.json -> Semana_1/reactNative/package.json
        renamed:    Semana 1/reactNative/src/index.js -> Semana_1/reactNative/src/index.js
        renamed:    Semana 1/reactNative/src/services/api.js -> Semana_1/reactNative/src/services/api.js
        renamed:    Semana 1/reactNative/yarn.lock -> Semana_1/reactNative/yarn.lock
        renamed:    Semana 1/typescript/package.json -> Semana_1/typescript/package.json
        renamed:    Semana 1/typescript/src/index.ts -> Semana_1/typescript/src/index.ts
        renamed:    Semana 1/typescript/src/route.ts -> Semana_1/typescript/src/route.ts
        renamed:    Semana 1/typescript/src/services/CreateUser.ts -> Semana_1/typescript/src/services/CreateUser.ts
        renamed:    Semana 1/typescript/tsconfig.json -> Semana_1/typescript/tsconfig.json
        renamed:    Semana 1/typescript/yarn.lock -> Semana_1/typescript/yarn.lock
        renamed:    Semana 2/node/ormconfig.json -> Semana_2/node/ormconfig.json
        renamed:    Semana 2/node/package.json -> Semana_2/node/package.json
        renamed:    Semana 2/node/src/@types/express.d.ts -> Semana_2/node/src/@types/express.d.ts
        renamed:    Semana 2/node/src/database/index.ts -> Semana_2/node/src/database/index.ts
        renamed:    Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts -> Semana_2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        renamed:    Semana 2/node/src/database/migrations/1598917118367-Users.ts -> Semana_2/node/src/database/migrations/1598917118367-Users.ts
        renamed:    Semana 2/node/src/database/migrations/1598920821694-AlterProvidertoProviderID.ts -> Semana_2/node/src/database/migrations/1598920821694-AlterProvidertoProviderID.ts
        new file:   Semana_2/node/src/database/migrations/1599010958145-AddAvatarFieldsToUsers.ts
        renamed:    Semana 2/node/src/middlewares/ensureAuthenticated.ts -> Semana_2/node/src/middlewares/ensureAuthenticated.ts
        renamed:    Semana 2/node/src/model/Appointments.ts -> Semana_2/node/src/model/Appointments.ts
        renamed:    Semana 2/node/src/model/Users.ts -> Semana_2/node/src/model/Users.ts
        renamed:    Semana 2/node/src/repositories/AppointmentsRepository.ts -> Semana_2/node/src/repositories/AppointmentsRepository.ts
        renamed:    Semana 2/node/src/routes/appointments.routes.ts -> Semana_2/node/src/routes/appointments.routes.ts
        renamed:    Semana 2/node/src/routes/index.ts -> Semana_2/node/src/routes/index.ts
        renamed:    Semana 2/node/src/routes/sessions.routes.ts -> Semana_2/node/src/routes/sessions.routes.ts
        new file:   Semana_2/node/src/routes/users.routes.ts
        renamed:    Semana 2/node/src/server.ts -> Semana_2/node/src/server.ts
        renamed:    Semana 2/node/src/services/AuthenticateUserService.ts -> Semana_2/node/src/services/AuthenticateUserService.ts
        renamed:    Semana 2/node/src/services/CreateAppointmentService.ts -> Semana_2/node/src/services/CreateAppointmentService.ts
        renamed:    Semana 2/node/src/services/CreateUserService.ts -> Semana_2/node/src/services/CreateUserService.ts
        new file:   Semana_2/node/src/services/UpdateUserAvatarService.ts
        new file:   Semana_2/node/tmp/.gitkeep
        renamed:    Semana 2/node/tsconfig.json -> Semana_2/node/tsconfig.json
        renamed:    Semana 2/node/yarn-error.log -> Semana_2/node/yarn-error.log
        renamed:    Semana 2/node/yarn.lock -> Semana_2/node/yarn.lock

---

# [0.0.16] - 01/09/2020
## JWT Token
## Authorization Service
## Type Express overwrite
## Session Route
## Authorization Middleware
## Authorization Middleware included in Appointments route

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        modified:   Semana 2/node/package.json
        new file:   Semana 2/node/src/@types/express.d.ts
        new file:   Semana 2/node/src/middlewares/ensureAuthenticated.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/routes/sessions.routes.ts
        new file:   Semana 2/node/src/services/AuthenticateUserService.ts
        modified:   Semana 2/node/yarn.lock

---

# [0.0.15] - 31/08/2020
## Add bcrypitJS dependency
## Create Hash password
## Fix Appointment Creation route

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/package.json
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/routes/users.routes.ts
        modified:   Semana 2/node/src/services/CreateAppointmentService.ts
        new file:   Semana 2/node/src/services/CreateUserService.ts
        new file:   Semana 2/node/yarn-error.log
        modified:   Semana 2/node/yarn.lock

---

# [0.0.14] - 31/08/2020
## Change Provider to Provider_ID
## Create User Model and Migration
## Create Many to One Relationship between Appointment and User

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        new file:   Semana 2/node/src/database/migrations/1598917118367-Users.ts
        new file:   Semana 2/node/src/database/migrations/1598920821694-AlterProvidertoProviderID.ts
        modified:   Semana 2/node/src/model/Appointments.ts
        new file:   Semana 2/node/src/model/Users.ts

---

# [0.0.13] - 30/08/2020
## Inclusion of Entities metadata at ormconfig
## Inclusion of reflect-metadata to create metadata
## Async functions calls fix

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/ormconfig.json
        modified:   Semana 2/node/package.json
        modified:   Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        modified:   Semana 2/node/src/model/Appointments.ts
        modified:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/server.ts
        modified:   Semana 2/node/src/services/CreateAppointmentService.ts
        modified:   Semana 2/node/tsconfig.json

---

# [0.0.12] - 30/08/2020
## Changelog typo correction
## Add typeorm
## Add typeorm config
## Create Initial Migration

**Changed Files**

        modified:   Changelog.md
        new file:   Semana 2/node/ormconfig.json
        modified:   Semana 2/node/package.json
        new file:   Semana 2/node/src/database/index.ts
        new file:   Semana 2/node/src/database/migrations/1598819008070-CreateAppointments.ts
        modified:   Semana 2/node/src/server.ts
        modified:   Semana 2/node/yarn.lock

---

# [0.0.11] - 27/08/2020
## SOLID
## Service
## Dependency Inversion

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/src/model/Appointments.ts
        modified:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts
        modified:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/services/CreateAppointmentService.ts
        
---

# [0.0.10] - 26/08/2020
## DTO 
## Omit

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 2/node/src/model/Appointments.ts
        modified:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        modified:   Semana 2/node/src/routes/appointments.routes.ts

---

# [0.0.9] - 26/08/2020
## Repository Pattern
## Class Creation
## Router and Routes
## Log Middlware

**Changed Files**

        modified:   .gitignore
        new file:   Desafios/Semana1.md
        new file:   Semana 2/node/package.json
        new file:   Semana 2/node/src/model/Appointments.ts
        new file:   Semana 2/node/src/repositories/AppointmentsRepository.ts
        new file:   Semana 2/node/src/routes/appointments.routes.ts
        new file:   Semana 2/node/src/routes/index.ts
        new file:   Semana 2/node/src/server.ts
        new file:   Semana 2/node/tsconfig.json
        new file:   Semana 2/node/yarn.lock

---

# [0.0.8] - 24/08/2020
## Typescript project creation
## Types 
## Interfaces 

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        new file:   Semana 1/typescript/package.json
        new file:   Semana 1/typescript/src/index.ts
        new file:   Semana 1/typescript/src/route.ts
        new file:   Semana 1/typescript/src/services/CreateUser.ts
        new file:   Semana 1/typescript/tsconfig.json
        new file:   Semana 1/typescript/yarn.lock

---

# [0.0.7] - 23/08/2020
## React Native Project Creation
## RN Component use
## RN integration with node API
## RN IOS APP

**Changed Files**

        modified:   Changelog.md
        new file:   Semana 1/reactNative/.buckconfig
        new file:   Semana 1/reactNative/.flowconfig
        new file:   Semana 1/reactNative/.gitattributes
        new file:   Semana 1/reactNative/.gitignore
        new file:   Semana 1/reactNative/.watchmanconfig
        new file:   Semana 1/reactNative/App.js
        new file:   Semana 1/reactNative/__tests__/App-test.js
        new file:   Semana 1/reactNative/android/app/BUCK
        new file:   Semana 1/reactNative/android/app/build.gradle
        new file:   Semana 1/reactNative/android/app/build_defs.bzl
        new file:   Semana 1/reactNative/android/app/debug.keystore
        new file:   Semana 1/reactNative/android/app/proguard-rules.pro
        new file:   Semana 1/reactNative/android/app/src/debug/AndroidManifest.xml
        new file:   Semana 1/reactNative/android/app/src/debug/java/com/reactnative/ReactNativeFlipper.java
        new file:   Semana 1/reactNative/android/app/src/main/AndroidManifest.xml
        new file:   Semana 1/reactNative/android/app/src/main/java/com/reactnative/MainActivity.java
        new file:   Semana 1/reactNative/android/app/src/main/java/com/reactnative/MainApplication.java
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
        new file:   Semana 1/reactNative/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
        new file:   Semana 1/reactNative/android/app/src/main/res/values/strings.xml
        new file:   Semana 1/reactNative/android/app/src/main/res/values/styles.xml
        new file:   Semana 1/reactNative/android/build.gradle
        new file:   Semana 1/reactNative/android/gradle.properties
        new file:   Semana 1/reactNative/android/gradle/wrapper/gradle-wrapper.jar
        new file:   Semana 1/reactNative/android/gradle/wrapper/gradle-wrapper.properties
        new file:   Semana 1/reactNative/android/gradlew
        new file:   Semana 1/reactNative/android/gradlew.bat
        new file:   Semana 1/reactNative/android/settings.gradle
        new file:   Semana 1/reactNative/app.json
        new file:   Semana 1/reactNative/babel.config.js
        new file:   Semana 1/reactNative/index.js
        new file:   Semana 1/reactNative/ios/Podfile
        new file:   Semana 1/reactNative/ios/Podfile.lock
        new file:   Semana 1/reactNative/ios/reactNative-tvOS/Info.plist
        new file:   Semana 1/reactNative/ios/reactNative-tvOSTests/Info.plist
        new file:   Semana 1/reactNative/ios/reactNative.xcodeproj/project.pbxproj
        new file:   Semana 1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative-tvOS.xcscheme
        new file:   Semana 1/reactNative/ios/reactNative.xcodeproj/xcshareddata/xcschemes/reactNative.xcscheme
        new file:   Semana 1/reactNative/ios/reactNative.xcworkspace/contents.xcworkspacedata
        new file:   Semana 1/reactNative/ios/reactNative/AppDelegate.h
        new file:   Semana 1/reactNative/ios/reactNative/AppDelegate.m
        new file:   Semana 1/reactNative/ios/reactNative/Images.xcassets/AppIcon.appiconset/Contents.json
        new file:   Semana 1/reactNative/ios/reactNative/Images.xcassets/Contents.json
        new file:   Semana 1/reactNative/ios/reactNative/Info.plist
        new file:   Semana 1/reactNative/ios/reactNative/LaunchScreen.storyboard
        new file:   Semana 1/reactNative/ios/reactNative/main.m
        new file:   Semana 1/reactNative/ios/reactNativeTests/Info.plist
        new file:   Semana 1/reactNative/ios/reactNativeTests/reactNativeTests.m
        new file:   Semana 1/reactNative/metro.config.js
        new file:   Semana 1/reactNative/package.json
        new file:   Semana 1/reactNative/src/index.js
        new file:   Semana 1/reactNative/src/services/api.js
        new file:   Semana 1/reactNative/yarn.lock

---


# [0.0.6] - 23/08/2020
## Front-End and Back-End integration
## Back-End add Cors
## Babel plugin to work with async/await

**Changed Files**

        modified:   Changelog.md
        modified:   Semana 1/node/package.json
        modified:   Semana 1/node/src/index.js
        modified:   Semana 1/node/yarn.lock
        modified:   Semana 1/react/babel.config.js
        modified:   Semana 1/react/package.json
        modified:   Semana 1/react/src/App.js
        modified:   Semana 1/react/src/Components/Body.js
        new file:   Semana 1/react/src/services/api.js
        new file:   Semana 1/react/yarn-error.log
        modified:   Semana 1/react/yarn.lock

---

# [0.0.5] - 22/08/2020
## React components
## Webpack
## Loaders (CSS,babel,Image)
## State, Immutability and Properties

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        modified:   Semana 1/react/package.json
        deleted:    Semana 1/react/public/bundle.js
        modified:   Semana 1/react/public/index.html
        new file:   Semana 1/react/src/App.js
        new file:   Semana 1/react/src/Assets/background.png
        new file:   Semana 1/react/src/CSS/App.css
        new file:   Semana 1/react/src/Components/Body.js
        new file:   Semana 1/react/src/Components/Footer.js
        new file:   Semana 1/react/src/Components/Header.js
        modified:   Semana 1/react/src/index.js
        deleted:    Semana 1/react/src/soma.js
        new file:   Semana 1/react/src/time.js
        modified:   Semana 1/react/webpack.config.js
        modified:   Semana 1/react/yarn.lock

---

# [0.0.4] - 22/08/2020
## Semana 1 folder inprovement
## React project creation
## Webpack configuration
## Babel configuration

**Changed Files**

        modified:   Changelog.md
        renamed:    Semana 1/package.json -> Semana 1/node/package.json
        renamed:    Semana 1/src/index.js -> Semana 1/node/src/index.js
        renamed:    Semana 1/yarn.lock -> Semana 1/node/yarn.lock
        new file:   Semana 1/react/babel.config.js
        new file:   Semana 1/react/package.json
        new file:   Semana 1/react/public/bundle.js
        new file:   Semana 1/react/public/index.html
        new file:   Semana 1/react/public/script.js
        new file:   Semana 1/react/src/index.js
        new file:   Semana 1/react/src/soma.js
        new file:   Semana 1/react/webpack.config.js
        new file:   Semana 1/react/yarn.lock

---

# [0.0.3] - 21/08/2020
## Concept of Middleware
## Improving routes
## Inclusion of Uuid dependecy


**Changed Files**

        modified:   Changelog.md
        modified:   Semana 1/package.json
        modified:   Semana 1/src/index.js
        modified:   Semana 1/yarn.lock

---

# [0.0.2] - 21/08/2020
## Concepts about NODE JS, REST API, HTTP verbs and Params
## Creation of express app and routes

**Changed Files**

        modified:   .gitignore
        modified:   Changelog.md
        new file:   Semana 1/package.json
        new file:   Semana 1/src/index.js
        new file:   Semana 1/yarn.lock

---


# [0.0.1] - 17/08/2020
## Git Project Creation
## Git Ignore Include
## Folder Structure defined


**Changed Files**

       new file:   .gitignore
       new file:   Changelog.md

 