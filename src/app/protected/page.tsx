import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProtectedPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <p>Bạn chưa đăng nhập.</p>;
    }

    return (
        <div>
            <h1>Chào {session.user?.name}</h1>
            <p>Đây là trang bảo mật</p>
        </div>
    );
}
