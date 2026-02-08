export function Profile(
    {user}: {user: {name: string, email?: string}}
) {
    return (
        <div className="profile">
            <h2>User: {user.name}</h2>
            <div>Email: {user.email ?? "Not provided"}</div>
            {user.email ? <div>Email: <code>{user.email}</code></div> : <code>missing</code>}
        </div>
    );
}