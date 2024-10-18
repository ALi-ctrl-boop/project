import { ProfileHeader } from '../../components/profile-header/ProfileHeader'
import { SubscriptionProfile } from '../../components/subscription-profile/SubscriptionProfile'

export const Profile = () => {
	return (
		<div className='w-full flex flex-col items-center'>
			<ProfileHeader />
			<SubscriptionProfile />
		</div>
	)
}
