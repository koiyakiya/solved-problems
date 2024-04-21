/*

solved-problems - Some problems I've solved in coding, all in various languages
Written in 2024 by koiyakiya | koiyakiya9@gmail.com

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring
rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

*/

#include <stdio.h>

void pyramid(int n);

int main(void)
{
    pyramid(4);
    /*
    Prints out:
       #
      ##
     ###
    ####
    */
}

void pyramid(int n)
{
    for (int i = n; i > 0; i--)
    {
        for (int j = 0; j < i - 1; j++)
        {
            printf(" ");
        }
        for (int x = 0; x < n - (i - 1); x++)
        {
            printf("#");
        }
        printf("\n");
    }
}
