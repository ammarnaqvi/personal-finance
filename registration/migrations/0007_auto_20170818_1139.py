# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-18 11:39
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0006_auto_20170818_1137'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='profile',
            table='user_profile',
        ),
    ]
