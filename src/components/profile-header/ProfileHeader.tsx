import { Button } from '../ui/button/Button'

export const ProfileHeader = () => {
	return (
		<div className='w-[1440px] mt-6 flex items-center justify-between'>
			<div className='flex items-center gap-3'>
				<img
					src='https://thumbs.dfs.ivi.ru/storage37/contents/1/6/a20db263fdd78934e37305f302c62a.png/50x50/?q=85'
					alt='profile'
					className='w-24 h-24 rounded-2xl'
				/>
				<h2 className='text-white text-3xl font-bold'>vsev21</h2>
			</div>
			<div>
				<Button variant='primary'>Переаключить аккаунт</Button>
			</div>
		</div>
	)
}
