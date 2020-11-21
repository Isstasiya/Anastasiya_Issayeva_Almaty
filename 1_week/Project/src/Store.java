import java.sql.*;

public class Store {
	protected double fish_priece; // централизиованнай цена рыб
	protected double reptile_priece; // централизированная цена рептилий
	protected String[] reptile_name; // массив с названиями рыб
	protected String[] fish_name; // массив с названиями рептилий
	
	Store(){ // стандартное создание класса, значение хотите меняйте, я не придумала что поставить
		fish_priece = 60;
		reptile_priece = 20;
		String[] ef = {"kingfish", "scomber", "tuna"};
		String[] df = {"turtle", "chameleon", "gecko"};
		fish_name = ef;
		reptile_name = df;
	}
	
	Store(double fish_price, double reptile_priece, String[] fish_name, String[] reptile_name){  // создание класса с воводом данных, значение хотите меняйте, я не придумала что поставить
		this.fish_priece = fish_price;
		this.reptile_priece = reptile_priece;
		this.fish_name = fish_name;
		this.reptile_name = reptile_name;
	}
	
	public static Connection connect() {
		Connection conn = null;
		try {
			String url = "jdbc:sqlite:Day_5.db";
			conn = DriverManager.getConnection(url);
		}
		catch(SQLException e) {
			System.out.println(e.getMessage());
		}
		return conn;
	}
	
	public double price(double number, String type) { // просто цена на number кол-во животных типа type
		Connection conn = connect();
		try {
			Statement stmt = conn.createStatement();
			String sql = "SELECT coefficent FROM types WHERE type='" + type + "'"; // Фатима, я там твою базу данных немножко переделала, потому что искать тип было трудно, базу данных прилагаю
			double res = stmt.executeQuery(sql).getDouble(1);
			System.out.println(res);
			for(String i:fish_name) {
				if (type == i){ // проверка это рыба или рептилия
					conn.close();
					return (number * res * fish_priece);
				}
			}
			conn.close();
			return (number * res * reptile_priece);
		}
		catch(SQLException e){
			System.out.println(e);
			return 0;
		}
		}
}
