package fpoly.datn.ecommerce_website.test;

import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        while (true) {
            if (num == 42) {
                break;
            }
            System.out.println(num);
        }
    }
}
