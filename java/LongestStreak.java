/*

solved-problems - Some problems I've solved in coding, all in various languages
Written in 2023 by starxeras | starxeras@gmail.com

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring
rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

*/

public class LongestStreak {
    public static void main(String[] args) {
        System.out.println(getLongestStreak("caaaaaat")); // prints 'a' - 6 instances

    }

    public static String getLongestStreak(String str) {
        if (str.isEmpty()) return "";

        // add a null so we can use strings like "aaaaa" that have no change in char
        str += '\u0000';

        int currentStreak = 0;
        int maxStreak = 0;
        char maxStreakChar = '\u0000';

        // start of the streak
        int leftPointer = 0;

        // rightPointer represents the end of the streak
        for (int rightPointer = 0; rightPointer < str.length(); rightPointer++) {
            // if the current character is not the recurring character in the streak
            if (str.charAt(rightPointer) != str.charAt(leftPointer)) {
                // the difference between the end and the start is the count
                currentStreak = rightPointer - leftPointer;

                // if the current streak/count is greater than the max streak (at the start this is always true)
                if (currentStreak > maxStreak) {
                    maxStreak = currentStreak;

                    // sets the max streak char to the streak's recurring character
                    maxStreakChar = str.charAt(leftPointer);
                }

                // sets the start of the streak to the current index
                leftPointer = rightPointer;
            }
        }

        return "'" + maxStreakChar + "' - " + maxStreak + " instances";
    }
}
