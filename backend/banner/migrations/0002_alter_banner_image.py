# Generated by Django 5.1.1 on 2024-10-24 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('banner', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banner',
            name='image',
            field=models.JSONField(default=list),
        ),
    ]