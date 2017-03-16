#!/usr/bin/perl

use strict;

my $file            = "";
my $channel         = -1;
my $start           = -1;
my $end             = -1;
my $speaker         = "";
my $speaker_type    = "";
my $speaker_dialect = "";
my $transcript      = "";
my $section         = -1;
my $turn            = -1;
my $segment         = -1;
my $section_type    = "";
my $su_type         = "";
my %H_kv            = {};
my $key             = "";
my $in_header       =  1;

while(my $line = <>){
    if (($in_header) && ($line == "file;unicode	channel;int	start;float	end;float	speaker;unicode	speakerType;unicode	speakerDialect;unicode	transcript;unicode	section;int	turn;int	segment;int	sectionType;unicode	suType;unicode")){
       $in_header = 0;
    }
    elsif ($line =~ m/^;;/){
    }
    else{
        $file=$speaker=$speaker_type=$speaker_dialect=$transcript=$section_type=$su_type = "";
        $channel=$start=$end=$section=$turn=$segment = -1;

        chomp($line);
        my @fields = split(/\t/, $line);

        $file            = $fields[0];
        $channel         = $fields[1];
        $start           = $fields[2];
        $end             = $fields[3];
        $speaker         = $fields[4];
        $speaker_type    = $fields[5];
        $speaker_dialect = $fields[6];
        $transcript      = $fields[7];
        $section         = $fields[8];
        $turn            = $fields[9];
        $segment         = $fields[10];
        $section_type    = $fields[11];
        $su_type         = $fields[12];


        if (index(lc($speaker), lc("interviewer")) != -1) {
            print $transcript, "\n";
        } 
    }
}
