import java.until.Scanner;

    public class Main{
      public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        try{
          int a = in.nextInt();
          int b = in.nextInt();
          System.out.println(a / b);
        }
        catch(ArithmeticException e){
          System.out.println(e.getMessage());
        }
        
        catch(InputMithmatchExhibition e){
          System.out.println("Error");
        }
      }
    }