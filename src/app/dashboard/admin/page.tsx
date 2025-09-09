import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      {/* Left */}
      <div className="w-full lg:w-2/3">
      {/* UserCard */}
      <div className="flex gap-4 justify-between">
        <UserCard type="student" />
        <UserCard type="parent" />
        <UserCard type="teacher" />
        <UserCard type="staff" />
      </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  )
}

export default AdminPage