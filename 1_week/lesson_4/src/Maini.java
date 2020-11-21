import java.sql.*;
public class Maini {
	public static Connection connect() {
		Connection conn = null;
		try {
			String url = "jdbs:sqlite:";
			conn = DriverManager.getConnection(url);
			
		}
		catch(SQLException e) {
			System.out.println(e.getMessage());
		}
		return conn;
	}
	
	public static void selectStudents() {
		Connection conn = connect();
		try {
			Statement stmt = conn.createStatement();
			String sql = "SELECT id, name, surname FROM students";
			ResultSet res = stmt.executeQuery(sql);
			while (res.next()) {
				System.out.println(res.getInt(1) + " " + res.getString("name") + " " + res.getString(3));
			}
		}
		catch(SQLException e){
			System.out.println(e.getMessage());
		}
		finally {
			try {
				conn.close();
			}
			catch(SQLException e) {
				e.printStackTrace();
			}
		}
	}
	public static void selectAll() {
		String sql = "SELECT id, name, surname FROM students";
		try {
			Connection conn = connect();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				System.out.println(rs.getInt("id"));
			}
			if (conn != null) {
				conn.close();
			}
		}
		catch(SQLException e){
			System.out.println(e.getMessage());
		}
	}
}

			